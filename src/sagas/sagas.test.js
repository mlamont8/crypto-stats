import { call, put } from "redux-saga/effects";
import * as api from "./api";
import { initialCoins, fetchSocials } from "./index";

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

// describe("getSocial successful try");
// const id = 999;
// const socials = { data: { Data: [1, 2, 3] } };
// const iterator = fetchSocials();
// it("must call api.coinsget", () => {
//   const testValue = iterator.next().value;
//   expect(testValue).toEqual(call(api.getSocial, id));
// });
// it("must put CoinList Fetch Success action", () => {
//   const testValue = iterator.next(socials).value;
//   expect(testValue).toEqual(put({ type: "SOCIAL_FETCH_SUCCESS", socials }));
// });
