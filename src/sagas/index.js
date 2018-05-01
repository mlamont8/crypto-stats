import { call, put, takeLatest, all, select, eventChannel } from "redux-saga/effects";
import axios from "axios";
import moment from "moment";
import io from 'socket.io-client';


import { searchTerm, searchArrays, coinLookup } from './selectors';

const exchangeGet = () =>
  axios.get("https://min-api.cryptocompare.com/data/all/exchanges");

const coinsGet = () =>
  axios.get("https://min-api.cryptocompare.com/data/all/coinlist");

const getByYear = (exch, from, to) =>
  axios.get(
    `https://min-api.cryptocompare.com/data/histoday?fsym=${from}&tsym=${to}&limit=29&aggregate=1&e=${exch}`
  );

const getByHour = (from, to) =>
  axios.get(
    `https://min-api.cryptocompare.com/data/histohour?fsym=${from}&tsym=${to}&limit=9`
  );

const getTopExchanges = (from, to) =>
  axios
    .get(
      `https://min-api.cryptocompare.com/data/top/exchanges/full?fsym=${from}&tsym=${to}&limit=5`
    );

function* terms() {
  const searchResults = yield select(searchTerm);
  return {
    market: searchResults.market,
    convertFrom: searchResults.convertFrom,
    convertTo: searchResults.convertTo,
  }

}

// List of all Coins to retrieve on initial load
export function* initialCoins() {
  try {
    const initialResponse = yield call(coinsGet);
    const coins = initialResponse.data.Data;
    // dispatch success action and create market list
    yield put({ type: "COINLIST_FETCH_SUCCESS", coins });
  } catch (error) {
    // dispatch a failure action to the store with the error
    yield put({ type: "COINLIST_FETCH_FAILURE", error });
  }
}

// List of Exchanges to retrieve on page load
export function* initialExchanges() {
  try {
    const initialResponse = yield call(exchangeGet);
    const exchanges = initialResponse.data;
    // dispatch success action and create market list
    yield all([
      put({ type: "EXCHANGE_FETCH_SUCCESS", exchanges }),
      put({ type: "MARKET_LIST_CREATED", exchanges }),
      call(initialCoins)
    ]);
    yield put({ type: "FETCH_SUCCESS" });
  } catch (error) {
    // dispatch a failure action to the store with the error
    yield put({ type: "EXCHANGE_FETCH_FAILURE", error });
  }
}

// Format the date in the json to m/dd format
const formatDate = jsondata => {
  const fixDate = jsondata.map(obj => {
    let rObj = {};
    rObj = obj;
    rObj.time = moment(rObj.time * 1000).format("MM/D");
    return rObj;
  });
  return fixDate;
};

// Format the time in the json to hh:mm format
const formatTime = jsondata => {
  const fixTime = jsondata.map(obj => {
    let rObj = {};
    rObj = obj;
    rObj.time = moment(rObj.time * 1000).format("LT");
    return rObj;
  });
  return fixTime;
};

export function* byYear(...args) {
  try {
    const yearData = yield call(getByYear, ...args)
    const yearChartData = formatDate(yearData.data.Data);
    const newData = yearChartData.slice(23);
    yield all([
      put({ type: "SEVEN_DAY_UPDATE", newData }),
      put({ type: "THIRTY_DAY_UPDATE", data: yearChartData })
    ])
    yield put({ type: "YEAR_FETCH_SUCCESS" });
  } catch (error) {
    // dispatch a failure action to the store with the error
    yield put({ type: "YEAR_FETCH_FAILURE", error });
  }
}

export function* byHour(...args) {
  try {
    const hourData = yield call(getByHour, ...args);
    const hourChartData = formatTime(hourData.data.Data);
    yield put({ type: "HOUR_FETCH_SUCCESS", data: hourChartData });
  } catch (error) {
    yield put({ type: "HOUR_FETCH_FAILURE", error });
  }
}

export function* byExchange(...args) {
  try {
    const exchangeData = yield call(getTopExchanges, ...args);
    const exchangeChartData = exchangeData.data.Data.Exchanges;
    // dispatch success action and create market list
    yield put({ type: "EXCHANGE_FETCH_SUCCESS", data: exchangeChartData });
  } catch (error) {
    // dispatch a failure action to the store with the error
    yield put({ type: "EXCHANGE_FETCH_FAILURE", error });
  }
}


function* search() {
  const results = yield call(terms);
  yield all([
    call(byYear, results.market, results.convertFrom, results.convertTo),
    call(byHour, results.convertFrom, results.convertTo),
    call(byExchange, results.convertFrom, results.convertTo),
  ])
  yield put({ type: "FETCH_SUCCESS" });
}

function* selectors(action) {

  const newArray = yield select(searchArrays);
  const { id, item } = action;
  const coinObject = yield select(coinLookup);
  const coin = coinObject[item];
  if (id === "market") {
    yield put({ type: "CREATE_CONVERT_FROM", item, exchangeResults: newArray.marketArray })
  } else if (id === "convertFrom") {
    yield put({ type: "CREATE_CONVERT_TO", item, convertFrom: newArray.convertFrom })
    yield put({ type: "COIN_LOOKUP", id, coin })
  } else {
    yield put({ type: "SEARCH_REQUEST" })
    yield put({ type: "COIN_LOOKUP", id, coin })
  }
}

// socket io

function* subscription() {
  const subResults = yield call(terms)
  return `2~${subResults.market}~${subResults.from}~${subResults.to}`
}
// let subscription = [
//   `2~${this.props.market}~${this.props.from}~${this.props.to}`
// ];
// let socket = io.connect("https://streamer.cryptocompare.com/");
// socket.emit("SubRemove", { subs: subscription });



function connect() {
  const socket = io('https://streamer.cryptocompare.com/');
  return new Promise(resolve => {
    socket.on('connect', () => {
      resolve(socket);
    });
  });
}

function subscribe(socket) {
  return eventChannel(emit => {
    // socket.on('users.login', ({ username }) => {
    //   emit(addUser({ username }));
    // });
    socket.emit("SubAdd", { subs: subscription() });
    socket.emit("SubRemove", { subs: subscription() });

    socket.on('messages.new', ({ message }) => {
      emit(newMessage({ message }));
    });
    socket.on('disconnect', e => {
      // TODO: handle
    });
    return () => { };
  });
}

// function* read(socket) {
//   const channel = yield call(subscribe, socket);
//   while (true) {
//     let action = yield take(channel);
//     yield put(action);
//   }
// }

// function* write(socket) {
//   while (true) {
//     const { payload } = yield take(`${sendMessage}`);
//     socket.emit('message', payload);
//   }
// }

// function* handleIO(socket) {
//   yield fork(read, socket);
//   yield fork(write, socket);
// }

// function* flow() {
//   while (true) {
//     let { payload } = yield take(`${login}`);
//     const socket = yield call(connect);
//     socket.emit('login', { username: payload.username });

//     const task = yield fork(handleIO, socket);

//     let action = yield take(`${logout}`);
//     yield cancel(task);
//     socket.emit('logout');
//   }
// }

// export default function* rootSaga() {
//   yield fork(flow);
// }

function* mySaga() {
  yield takeLatest("EXCHANGE_FETCH_REQUESTED", initialExchanges);
  yield takeLatest("COIN_FETCH_REQUESTED", initialCoins);
  yield takeLatest("SEARCH_REQUEST", search);
  yield takeLatest("SELECTION_ENTERED", selectors)
}

export default mySaga;
