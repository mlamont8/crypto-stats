import { call, put, takeLatest, all } from "redux-saga/effects";
import axios from "axios";

const exchangeGet = () =>
  axios.get("https://min-api.cryptocompare.com/data/all/exchanges");

// Data to retrieve on page load
export function* initialFetch() {
  try {
    const initialResponse = yield call(exchangeGet);
    const exchanges = initialResponse.data;
    // dispatch success action and create market list
    yield all([
      put({ type: "EXCHANGE_FETCH_SUCCESS", exchanges }),
      put({ type: "MARKET_LIST_CREATED", exchanges })
    ]);
    yield put({ type: "FETCH_SUCCESS" });
  } catch (error) {
    // dispatch a failure action to the store with the error
    yield put({ type: "EXCHANGE_FETCH_FAILURE", error });
  }
}

// function* fetchUser(action) {
//   try {
//     const user = yield call(Api.fetchUser, action.payload.userId);
//     yield put({ type: "USER_FETCH_SUCCEEDED", user: user });
//   } catch (e) {
//     yield put({ type: "USER_FETCH_FAILED", message: e.message });
//   }
// }

function* mySaga() {
  yield takeLatest("EXCHANGE_FETCH_REQUESTED", initialFetch);
}

export default mySaga;
