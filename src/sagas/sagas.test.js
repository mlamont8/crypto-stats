import { call, put, select } from "redux-saga/effects";
import * as api from "./api";
import { searchArrays, coinLookup } from './selectors';
import { initialCoins, fetchNews, checkForCoin } from "./index";
import { cloneableGenerator } from "redux-saga/utils";


/* -------initialCoins()----------*/

describe("initialCoins successful try", () => {
  const coins = { data: { Data: [1, 2, 3] } };
  const iterator = initialCoins();
  it("must call api.coinsget", () => {
    const testValue = iterator.next().value;
    expect(testValue).toEqual(call(api.coinsGet));
  });
  it("must put CoinList Fetch Success action", () => {
    const testValue = iterator.next(coins).value;
    expect(testValue).toEqual(put({ type: "COINLIST_FETCH_SUCCESS", coins }));
  });
});

describe("initialCoins catch error", () => {
  const error = "Fetch Unsuccessful";
  const iterator = initialCoins();
  it("must call api.coinsget", () => {
    const testValue = iterator.next().value;
    expect(testValue).toEqual(call(api.coinsGet));
  });
  it("throw on unsuccessful fetch", () => {
    iterator.next();
    const testValue = iterator.throw("Fetch Unsuccessful").value;
    expect(testValue).toEqual(put({ type: "COINLIST_FETCH_FAILURE", error }));
  });
});

/* -------fetchNews()----------*/

describe("fetchNews()", () => {
  const news = { data: { Data: [1, 2, 3] } };
  const iterator = fetchNews();
  it("must call api.fetchNews", () => {
    const testValue = iterator.next().value;
    expect(testValue).toEqual(call(api.getNews));
  });
  it("must put fetchNews Success action", () => {
    const testValue = iterator.next(news).value;
    expect(testValue).toEqual(put({ type: "NEWS_FETCH_SUCCESS", news }));
  });
});

describe('fetchNews() error', () => {
  const iterator = fetchNews();
  const error = "Fetch Unsuccessful";
  it("must call api.fetchNews", () => {
    const testValue = iterator.next().value;
    expect(testValue).toEqual(call(api.getNews));
  });

  it("throws on unsuccessful fetch", () => {
    iterator.next();
    const testValue = iterator.throw("Fetch Unsuccessful").value;
    expect(testValue).toEqual(put({ type: "NEWS_FETCH_ERROR", error }));
  });
})

