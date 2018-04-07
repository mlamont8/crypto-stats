import axios from 'axios';
import moment from 'moment';

/*   ~~  Initial Load Actions        */


// Error fetching from api

export const ApiFetchError = bool => ({
  type: 'API_FETCH_HAS_ERRORED',
  hasErrored: bool,
});

const coinFetchSuccess = coins => ({
  type: 'COINLIST_FETCH_SUCCESS',
  coins,
});

const coinFetch = () =>
  dispatch => (
    axios.get('https://min-api.cryptocompare.com/data/all/coinlist')
      .then(
        response => dispatch(coinFetchSuccess(response.data.Data)),
        error => dispatch(ApiFetchError(true, error)),
      )
  );

// Adds an array of the list of markets for search purposes
const marketArrayCreate = data => ({
  type: 'MARKET_LIST_CREATED',
  data,
});

// SUCCESSFUL Exchange Fetch from API

export const exchangeFetch = (exchanges, bool) => ({
  type: 'EXCHANGE_FETCH_SUCCESS',
  exchanges,
  fetched: bool,
});

// When fetching from API

export const apiHasLoaded = bool => ({
  type: 'API_HAS_LOADED',
  apiHasLoaded: bool,
});

// Initial Fetch on page load

export const initialFetch = () =>
  (dispatch) => {
    dispatch(apiHasLoaded(false));
    return axios.get('https://min-api.cryptocompare.com/data/all/exchanges')
      .then(
        response =>
          Promise.all([
            dispatch(exchangeFetch(response.data, true)),
            dispatch(marketArrayCreate(response.data)),
            dispatch(coinFetch()),
          ]),
        error => dispatch(ApiFetchError(true, error)),
      ).then(() =>
        dispatch(apiHasLoaded(true)));
  };


// Actions for Selectors in form

export const CreateConvertFrom = (item, exchangeResults) => ({
  type: 'CONVERT_FROM_LIST_CREATED',
  item,
  exchangeResults,
});

export const MarketSelectionEntered = (id, item) => ({
  type: 'MARKET_SELECTION_ENTERED',
  id,
  item,
});

// send coin info to reducer
export const CoinInfoObject = (coinObject, id) => ({
  type: 'COIN_LOOKUP',
  id,
  coin: coinObject,
});

// Get coin info on form select from full coin object
const LookupCoin = (id, item) =>
  (dispatch, getState) => {
    const coinObject = getState().initialLoadData.coins;
    const coinLookup = coinObject[item];
    dispatch(CoinInfoObject(coinLookup, id));
  };


export const ConvertFromEntered = (id, item) => ({
  type: 'CONVERT_FROM_ENTERED',
  id,
  item,
});


export const ConvertToEntered = (id, item) => ({
  type: 'CONVERT_TO_ENTERED',
  id,
  item,
});

export const CreateConvertTo = (item, convertFrom) => ({
  type: 'CONVERT_TO_LIST_CREATED',
  item,
  convertFrom,
});

// Last 7 days
export const SevenDayData = (data) => {
  const newData = data.slice(23);
  return {
    type: 'SEVEN_DAY_UPDATE',
    newData,
  };
};
// Last 30 days
export const ThirtyDayData = data => ({
  type: 'THIRTY_DAY_UPDATE',
  data,
});

// Format the date in the json to m/dd format
const formatDate = (jsondata) => {
  const fixDate = jsondata.map((obj) => {
    let rObj = {};
    rObj = obj;
    rObj.time = moment(rObj.time * 1000).format('MM/D');
    return rObj;
  });
  return fixDate;
};


// Successful Daily Data Retrieval
export const coinByDaySuccess = (data) => {
  const formattedData = formatDate(data);
  return (dispatch) => {
    dispatch(SevenDayData(formattedData));
    dispatch(ThirtyDayData(formattedData));
  };
};

// Format the time in the json to hh:mm format
const formatTime = (jsondata) => {
  const fixTime = jsondata.map((obj) => {
    let rObj = {};
    rObj = obj;
    rObj.time = moment(rObj.time * 1000).format('LT');
    return rObj;
  });
  return fixTime;
};

// Last 10 hours
const dataByHour = data => ({
  type: 'DATA_BY_HOUR',
  data,
});

// Successful Daily Data Retrieval
export const coinByTimeSuccess = (data) => {
  const formattedTime = formatTime(data.Data);
  return (dispatch) => {
    dispatch(dataByHour(formattedTime));
  };
};

const byYear = (exchange, fromSymb, toSymb) =>
  dispatch => (
    axios.get(`https://min-api.cryptocompare.com/data/histoday?fsym=${fromSymb}&tsym=${toSymb}&limit=29&aggregate=1&e=${exchange}`)
      .then(
        response => dispatch(coinByDaySuccess(response.data.Data)),
        error => dispatch(ApiFetchError(true, error)),

      )
  );

const exchangeByVolume = data => ({
  type: 'EXCHANGE_BY_VOLUME',
  data,
});

const topExchanges = (from, to) =>
  dispatch => (
    axios.get(`https://min-api.cryptocompare.com/data/top/exchanges/full?fsym=${from}&tsym=${to}&limit=5`)
      .then(
        response => dispatch(exchangeByVolume(response.data.Data.Exchanges)),
        error => dispatch(ApiFetchError(true, error)),
      )
  );

  // Get data for last 10 hours

const byHour = (from, to) =>
  dispatch => (
    axios.get(`https://min-api.cryptocompare.com/data/histohour?fsym=${from}&tsym=${to}&limit=9`)
      .then(
        response => dispatch(coinByTimeSuccess(response.data)),
        error => dispatch(ApiFetchError(true, error)),
      )
  );


// Search using search results from state
export const DoSearch = () =>
  (dispatch, getState) => {
    const exchange = getState().searchTerm.market;
    const fromSymb = getState().searchTerm.convertFrom;
    const toSymb = getState().searchTerm.convertTo;
    dispatch(byYear(exchange, fromSymb, toSymb));
    dispatch(topExchanges(fromSymb, toSymb));
    dispatch(byHour(fromSymb, toSymb));
  };


// Forms the search terms and the
//  arrays for the upcoming selectors
export const SelectData = (id, item) =>
  (dispatch, getState) => {
    if (id === 'market') {
      const exchangeArray = getState().searchArrays.marketArray;
      dispatch(MarketSelectionEntered(id, item));
      dispatch(CreateConvertFrom(item, exchangeArray));
    } else if (id === 'convertFrom') {
      const { convertFrom } = getState().searchArrays;
      dispatch(ConvertFromEntered(id, item));
      dispatch(CreateConvertTo(item, convertFrom));
      dispatch(LookupCoin(id, item));
    } else {
      dispatch(ConvertToEntered(id, item));
      dispatch(DoSearch());
      dispatch(LookupCoin(id, item));
    }
  };

