import { select } from "redux-saga/effects";

export const searchTerm = state => state.searchTerm;
export const coinLookup = state => state.initialLoadData.coins;
export const searchArrays = state => state.searchArrays;
export const currentArray = state => state.currentArray;
export const errors = state => state.errors;


// Recalls the user submitted search items from state
export function* terms() {
  const results = yield select(searchTerm);
  return {
    market: results.market,
    convertFrom: results.convertFrom,
    convertTo: results.convertTo
  };
}
