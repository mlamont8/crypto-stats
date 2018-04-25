import { call, put, takeLatest, all, select } from "redux-saga/effects";
import axios from "axios";
import moment from "moment";


import { getSelections } from './selectors';

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
  const terms = yield select(getSelections);
  const exchangeResult = terms.market;
  const fromResult = terms.convertFrom;
  const toResult = terms.convertTo;
  yield all([
    call(byYear, exchangeResult, fromResult, toResult),
    call(byHour, fromResult, toResult),
    call(byExchange, fromResult, toResult),
  ])
  yield put({ type: "FETCH_SUCCESS" });
}

function* mySaga() {
  yield takeLatest("EXCHANGE_FETCH_REQUESTED", initialExchanges);
  yield takeLatest("COIN_FETCH_REQUESTED", initialCoins);
  yield takeLatest("SEARCH_REQUEST", search);
}

export default mySaga;
