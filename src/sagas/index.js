import { call, put, takeLatest, all, select, fork } from "redux-saga/effects";
import * as api from "./api";
import liveWatch from "./live";
import { formatDate, formatTime } from "../helpers/index";
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
  } else {
    yield put({ type: "SEARCH_REQUEST" });
    yield put({ type: "COIN_LOOKUP", id, coin });
    if (coin.Name === "BCH" || "BTC" || "LTC" || "ETH" || "BNB") {
      const dollars = yield call(api.dollarExchange, coin.Name);
      yield put({ type: "DOLLAR_CONVERSION", dollars });
    }
  }
}

// New Search

function* search() {
  const results = yield call(terms);
  // Connect for live results
  yield fork(liveWatch);
  // Get current results for charts
  try {
    yield all([
      call(byYear, results.market, results.convertFrom, results.convertTo),
      call(byHour, results.convertFrom, results.convertTo),
      call(byExchange, results.convertFrom, results.convertTo)
    ]);
    yield put({ type: "FETCH_SUCCESS" });
  } catch (error) {
    yield put({ type: "SEARCH_FETCH_FAILURE", error });
  }
}

function* mySaga() {
  yield takeLatest("EXCHANGE_FETCH_REQUESTED", initialExchanges);
  yield takeLatest("COIN_FETCH_REQUESTED", initialCoins);
  yield takeLatest("SEARCH_REQUEST", search);
  yield takeLatest("SELECTION_ENTERED", selectors);
}

export default mySaga;
