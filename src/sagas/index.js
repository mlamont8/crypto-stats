import { all, call, fork, put, select, takeLatest } from "redux-saga/effects";
import {
  formatDate,
  formatTime,
  monthYear,
  formatNews
} from "../helpers/index";
import * as api from "./api";
import liveWatch from "./live";
import { coinLookup, searchArrays, terms } from "./selectors";

let searchesThisSession = 0;

// List of all Coins to retrieve on initial load
export function* initialCoins() {
  try {
    const coins = yield call(api.coinsGet);
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
      put({ type: "MARKET_LIST_CREATED", exchanges })
      // call(initialCoins)
    ]);
    yield put({ type: "FETCH_SUCCESS" });
  } catch (error) {
    // dispatch a failure action to the store with the error
    yield put({ type: "EXCHANGE_FETCH_FAILURE", error });
  }
}

export function* fetchNews() {
  try {
    const fetch = yield call(api.getNews);
    const limitNews = fetch.data.Data.slice(0, 5);
    const news = formatNews(limitNews);
    yield put({ type: "NEWS_FETCH_SUCCESS", news });
  } catch (error) {
    yield put({ type: "NEWS_FETCH_ERROR", error });
  }
}

// Loads initial coin, exchange and news data

export function* initialMount(action) {
  yield put({ type: "INITIAL_LOAD", status: action.status });
  yield call(initialExchanges);
  yield call(initialCoins);
  yield call(fetchNews);
}

export function* historical(...args) {
  try {
    const historicalData = yield call(api.historical, ...args);
    const fullHistory = monthYear(historicalData.data.Data);
    yield put({ type: "HISTORICAL_UPDATE", fullHistory });
  } catch (error) {
    // dispatch a failure action to the store with the error
    yield put({ type: "HISTORICAL_FETCH_FAILURE", error });
  }
}

export function* byDay(...args) {
  try {
    const dayData = yield call(api.getByDay, ...args);
    const newData = formatDate(dayData.data.Data);
    yield put({ type: "FIFTEEN_DAY_UPDATE", newData });
  } catch (error) {
    yield put({ type: "FIFTEEN_DAY_FETCH_FAILURE", error });
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

export function* formSelector(action) {
  const { id, item } = action;
  const newArray = yield select(searchArrays);
  const coinObject = yield select(coinLookup);
  const coin = coinObject[item];

  if (id === "market") {
    yield put({
      type: "CREATE_CONVERT_FROM",
      item,
      exchangeResults: newArray
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

    // reset currentArray to Market for new searches

    if (coin.Name === "BCH" || "BTC" || "LTC" || "ETH" || "BNB") {
      const dollars = yield call(api.dollarExchange, coin.Name);
      yield put({ type: "DOLLAR_CONVERSION", dollars });
    }


  }
}

// Resets Currentarray SearchTerms 
function* resetSearch() {
  const previousArray = yield select(searchArrays);
  yield put({
    type: "SEARCH_RESET",
    currentArray: previousArray.marketArray,
    searchTerm: {
      market: "",
      convertFrom: "",
      convertTo: ""
    },
  })
}

// Checks to see if data currently exists for coin

export function* checkForCoin(action) {
  const coinObject = yield select(coinLookup);
  const coin = coinObject[action.item];
  // if it finds the coin, calls the formSelector logic
  // else the coin was not found
  if (coin || action.id === "market") {
    yield call(formSelector, action);
  } else {
    console.log(action.id, ` was not found!`);
    yield call(resetSearch)
  }
}

// New Search

function* search() {
  // Retrieve search terms
  const results = yield call(terms);

  searchesThisSession += 1;
  // Connect for live results
  yield fork(liveWatch, searchesThisSession);
  // Get current results for charts
  try {
    yield all([
      call(historical, results.market, results.convertFrom, results.convertTo),
      call(byDay, results.market, results.convertFrom, results.convertTo),
      call(byHour, results.convertFrom, results.convertTo),
      call(byExchange, results.convertFrom, results.convertTo),
      put({ type: "NEW_SEARCH", status: false })
    ]);
    yield put({ type: "FETCH_SUCCESS" });
  } catch (error) {
    yield put({ type: "SEARCH_FETCH_FAILURE", error });
  }
}

// When a new search from the main page is initiated.
// Retrieves marketarray and sets as currentarray
// Sets modal to open
function* searchFromMain() {
  // Resets Currentarray SearchTerms 
  const searchArray = yield select(searchArrays);
  yield put({
    type: "SEARCH_RESET",
    currentArray: searchArray.marketArray,
    searchTerm: {
      market: "",
      convertFrom: "",
      convertTo: ""
    },
    toggle: true
  })
}

function* initialSearch() {
  // On a new search from frontpage 
  const searchArray = yield select(searchArrays);
  yield put({
    type: "INITIAL_SEARCH",
    currentArray: searchArray.marketArray,
    searchTerm: {
      market: "",
      convertFrom: "",
      convertTo: ""
    },
    id: "market",
    toggle: true
  })
}

// When user selects close modal button on modal
// reset currentArray to marketArray
//reset searchterm object
function* closeModal() {
  const searchArray = yield select(searchArrays);
  console.log('close', searchArray.marketArray)
  yield put({
    type: "CLOSE_MODAL",
    currentArray: searchArray.marketArray,
  })
}

function* mySaga() {
  yield takeLatest("INITIAL_MOUNT", initialMount);
  yield takeLatest("SEARCH_REQUEST", search);
  yield takeLatest("SELECTION_ENTERED", checkForCoin);
  yield takeLatest("NEW_RESET", resetSearch);
  yield takeLatest('SEARCH_FROM_MAIN', searchFromMain)
  yield takeLatest('SEARCH_FROM_FRONT', initialSearch)
  yield takeLatest('CLOSE_ACTION', closeModal)
}

export default mySaga;
