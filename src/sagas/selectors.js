import { select } from 'redux-saga/effects';

export const searchTerm = state => state.searchTerm;
export const coinLookup = state => state.initialLoadData.coins;
export const searchArrays = state => state.searchArrays;
export const coinID = state => state.coinId.convertFrom;


export function* terms() {
    const results = yield select(searchTerm);
    return {
        market: results.market,
        convertFrom: results.convertFrom,
        convertTo: results.convertTo
    };
}