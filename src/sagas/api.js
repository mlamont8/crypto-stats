import axios from "axios";

export const exchangeGet = () =>
  axios.get("https://min-api.cryptocompare.com/data/all/exchanges");

export const coinsGet = () =>
  axios.get("https://min-api.cryptocompare.com/data/all/coinlist");

export const getByDay = (exch, from, to) =>
  axios.get(
    `https://min-api.cryptocompare.com/data/histoday?fsym=${from}&tsym=${to}&limit=15&aggregate=1&e=${exch}`
  );

export const historical = (exch, from, to) =>
  axios.get(
    `https://min-api.cryptocompare.com/data/histoday?fsym=${from}&tsym=${to}&allData=true&aggregate=1&e=${exch}`
  );

export const getByHour = (from, to) =>
  axios.get(
    `https://min-api.cryptocompare.com/data/histohour?fsym=${from}&tsym=${to}&limit=9`
  );

export const getTopExchanges = (from, to) =>
  axios.get(
    `https://min-api.cryptocompare.com/data/top/exchanges/full?fsym=${from}&tsym=${to}&limit=5`
  );

export const getNews = () =>
  axios.get(
    `https://min-api.cryptocompare.com/data/v2/news/?lang=EN&sortOrder=latest`
  );

export function* dollarExchange(from) {
  const dollarObject = yield axios.get(
    `https://min-api.cryptocompare.com/data/price?fsym=${from}&tsyms=USD`
  );
  return dollarObject.data.USD;
}
