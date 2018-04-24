import { call, put, takeLatest } from "redux-saga/effects";
import axios from 'axios';

const exchangeFetch = () =>
  axios.get('https://min-api.cryptocompare.com/data/all/exchanges')


export function* fetchInitial() {
  try {
    const initialResponse = yield call(exchangeFetch)
    const exchanges = initialResponse.data;
    // dispatch a success action
    yield put({ type: 'EXCHANGE_FETCH_SUCCESS', exchanges })
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
  yield takeLatest("EXCHANGE_FETCH_REQUESTED", fetchInitial);
}

export default mySaga;
