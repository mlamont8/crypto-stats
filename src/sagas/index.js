import {
  call,
  put,
  takeLatest,
  all,
  select,
  fork,
} from "redux-saga/effects";
import moment from "moment";
import * as api from './api';
import liveWatch from './live';

import { searchArrays, coinLookup, terms } from "./selectors";



// List of all Coins to retrieve on initial load
export function* initialCoins() {
  try {
    const initialResponse = yield call(api.coinsGet);
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
    const initialResponse = yield call(api.exchangeGet);
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
    const yearData = yield call(api.getByYear, ...args);
    const yearChartData = formatDate(yearData.data.Data);
    const newData = yearChartData.slice(23);
    yield all([
      put({ type: "SEVEN_DAY_UPDATE", newData }),
      put({ type: "THIRTY_DAY_UPDATE", data: yearChartData })
    ]);
    yield put({ type: "YEAR_FETCH_SUCCESS" });
  } catch (error) {
    // dispatch a failure action to the store with the error
    yield put({ type: "YEAR_FETCH_FAILURE", error });
  }
}

export function* byHour(...args) {
  try {
    const hourData = yield call(api.getByHour, ...args);
    const hourChartData = formatTime(hourData.data.Data);
    yield put({ type: "HOUR_FETCH_SUCCESS", data: hourChartData });
  } catch (error) {
    yield put({ type: "HOUR_FETCH_FAILURE", error });
  }
}

export function* byExchange(...args) {
  try {
    const exchangeData = yield call(api.getTopExchanges, ...args);
    const exchangeChartData = exchangeData.data.Data.Exchanges;
    // dispatch success action and create market list
    yield put({ type: "EXCHANGE_FETCH_SUCCESS", data: exchangeChartData });
  } catch (error) {
    // dispatch a failure action to the store with the error
    yield put({ type: "EXCHANGE_FETCH_FAILURE", error });
  }
}

function* selectors(action) {
  const newArray = yield select(searchArrays);
  const { id, item } = action;
  const coinObject = yield select(coinLookup);
  const coin = coinObject[item];
  if (id === "market") {
    yield put({
      type: "CREATE_CONVERT_FROM",
      item,
      exchangeResults: newArray.marketArray
    });
  } else if (id === "convertFrom") {
    yield put({
      type: "CREATE_CONVERT_TO",
      item,
      convertFrom: newArray.convertFrom
    });
    yield put({ type: "COIN_LOOKUP", id, coin });
    console.log(coin, "coin data");
  } else {
    yield put({ type: "SEARCH_REQUEST" });
    yield put({ type: "COIN_LOOKUP", id, coin });
    console.log(coin.Name, "dest coin");
    if (coin.Name === "BCH" || "BTC" || "LTC" || "ETH" || "BNB") {
      console.log("dollar conversion");
      const dollars = yield call(api.dollarExchange, coin.Name);
      yield put({ type: "DOLLAR_CONVERSION", dollars });
    }
  }
}


// New Search

function* search() {
  const results = yield call(terms);
  // Perform socket search 
  yield fork(liveWatch);
  // Get Results for charts
  yield all([
    call(byYear, results.market, results.convertFrom, results.convertTo),
    call(byHour, results.convertFrom, results.convertTo),
    call(byExchange, results.convertFrom, results.convertTo)
  ]);
  yield put({ type: "FETCH_SUCCESS" });
}

function* mySaga() {
  yield takeLatest("EXCHANGE_FETCH_REQUESTED", initialExchanges);
  yield takeLatest("COIN_FETCH_REQUESTED", initialCoins);
  yield takeLatest("SEARCH_REQUEST", search);
  yield takeLatest("SELECTION_ENTERED", selectors);
}

export default mySaga;
