import axios from 'axios';

export const exchangeGet = () =>
    axios.get("https://min-api.cryptocompare.com/data/all/exchanges");

export const coinsGet = () =>
    axios.get("https://min-api.cryptocompare.com/data/all/coinlist");

export const getByYear = (exch, from, to) =>
    axios.get(
        `https://min-api.cryptocompare.com/data/histoday?fsym=${from}&tsym=${to}&limit=29&aggregate=1&e=${exch}`
    );

export const getByHour = (from, to) =>
    axios.get(
        `https://min-api.cryptocompare.com/data/histohour?fsym=${from}&tsym=${to}&limit=9`
    );

export const getTopExchanges = (from, to) =>
    axios.get(
        `https://min-api.cryptocompare.com/data/top/exchanges/full?fsym=${from}&tsym=${to}&limit=5`
    );

export function* dollarExchange(from) {
    const dollarObject = yield axios.get(
        `https://min-api.cryptocompare.com/data/price?fsym=${from}&tsyms=USD`
    );
    return dollarObject.data.USD;
}