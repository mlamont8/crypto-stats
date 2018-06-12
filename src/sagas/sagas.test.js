import { call, put, select } from "redux-saga/effects";
import * as api from "./api";
import { coinID } from "./selectors";
import { initialCoins, fetchSocials } from "./index";


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

/* -------fetchSocials()----------*/

describe("fetchSocials()", () => {
  const socials = { data: { Data: [1, 2, 3] } };
  const iterator = fetchSocials();
  it("should retrieve id from state using selector", () => {
    const idValue = iterator.next().value;
    expect(idValue).toEqual(select(coinID));
  })
  it("must call api.fetchSocials", () => {
    const idValue = 999;
    const testValue = iterator.next(idValue).value;
    expect(testValue).toEqual(call(api.getSocial, idValue));
  });
  it("must put fetchsocials Success action", () => {
    const testValue = iterator.next(socials).value;
    expect(testValue).toEqual(put({ type: "SOCIAL_FETCH_SUCCESS", socials }));
  });
});

describe('fetchSocials() error', () => {
  const iterator = fetchSocials();
  const error = "Fetch Unsuccessful";
  it("should retrieve id from state using selector", () => {
    const idValue = iterator.next().value;
    expect(idValue).toEqual(select(coinID));
  })
  it("must call api.fetchSocials", () => {
    const idValue = 999;
    const testValue = iterator.next(idValue).value;
    expect(testValue).toEqual(call(api.getSocial, idValue));
  });
  it("throw on unsuccessful fetch", () => {
    iterator.next();
    const testValue = iterator.throw("Fetch Unsuccessful").value;
    expect(testValue).toEqual(put({ type: "SOCIAL_FETCH_ERROR", error }));
  });
})