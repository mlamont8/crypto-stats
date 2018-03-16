import axios from 'axios'
import moment from 'moment'


// Fetch the Full Exchange List with Coins
// BTC fetch as initial coin (remove in final version)
export function fetchExchanges() {
  return (dispatch) => {
    dispatch(apiHasLoaded(false));
    return axios.get('https://min-api.cryptocompare.com/data/all/exchanges')
      .then (
        response =>
        Promise.all([
            dispatch(exchangeFetchSuccess(response.data, true)),
            // dispatch(CoinByDay('BTC')),
            dispatch(marketArrayFetch(response.data))
          ]),
        error => dispatch(ApiFetchError(true, error))
      ).then(() =>
        dispatch(apiHasLoaded(true)))
  }
}

// Adds an array of the list of markets for search purposes
function marketArrayFetch(data){
  return{
    type: 'MARKET_ARRAY_FETCHED',
    data
  }
}




// SUCCESSFUL Exchange Fetch from API

export function exchangeFetchSuccess(exchanges, bool) {
  return {
    type: 'EXCHANGE_FETCH_SUCCESS',
    exchanges,
    fetched: bool

  };
}

// When fetching from API

export function apiHasLoaded(bool) {
  return {
    type: 'API_HAS_LOADED',
    apiHasLoaded: bool
  };
}


// Error fetching from api

export function ApiFetchError(bool, data) {
  console.log('front has errored', data)
  return {
    type: 'API_FETCH_HAS_ERRORED',
    hasErrored: bool
  };
}

export function SearchTerm(result) {
  return {
    type: 'SEARCH_TERM_ENTERED',
    SearchTerm: result
  }
}

export function SelectChoices(id, item){
  console.log(id, item, 'select choices')
  return{
    type: 'SELECTION_ENTERED',
    id,
    item
  }
}

// Fetch the Coin by day
export function CoinByDay(coin) {
  return (dispatch) => {
    dispatch(SearchTerm(coin));
    // dispatch(ApiFetching(true));
    return axios.get('https://min-api.cryptocompare.com/data/histoday?fsym=' + coin + '&tsym=USD&limit=29&aggregate=1&e=CCCAGG')
      .then (
        response => dispatch(coinByDaySuccess(response.data.Data)),
        error => dispatch(ApiFetchError(true, error))
      )
      // .then(() =>
      //   dispatch(ApiFetching(false)))
  }
}


// Successful Daily Data Retrieval
  export function coinByDaySuccess(data){
    let formattedData = formatTime(data)
    return (dispatch) => {
      dispatch(SevenDayData(formattedData))
      dispatch(ThirtyDayData(formattedData))
    }
  }

// Last 7 days
  export function SevenDayData(data){
    let newData = data.slice(23)
    return {
      type: 'SEVEN_DAY_UPDATE',
      newData
    }
  }
// Last 30 days
  export function ThirtyDayData(data){
    return{
      type: 'THIRTY_DAY_UPDATE',
      data
    }

  }

// Format the time in the json to m/dd/yyyy format
function formatTime(jsondata){
  const formatTime = jsondata.map(
    obj => {
      var rObj = {};
      rObj = obj;
      rObj.time = moment(rObj.time * 1000).format('MM/D');
        return rObj;
    }
  )
  return formatTime
}
