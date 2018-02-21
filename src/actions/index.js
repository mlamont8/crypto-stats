import axios from 'axios'


// Fetch the Full Coinlist
export function fetchCoinList() {
  return (dispatch) => {
    dispatch(ApiFetching(true));
    return axios.get('https://min-api.cryptocompare.com/data/all/coinlist')
      .then (
        response => dispatch(coinFetchSuccess(response.data.Data)),
        error => dispatch(ApiFetchError(true, error))
      ).then(() =>
        dispatch(ApiFetching(false)))
  }
}



// SUCCESSFUL async call

export function coinFetchSuccess(items) {
  return {
    type: 'FRONT_FETCH_DATA_SUCCESS',
    items: [items]
  };
}

// When fetching from API

export function ApiFetching(bool) {
  return {
    type: 'API_IS_FETCHING',
    isLoading: bool
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

// Fetch the Coin by day
export function CoinByDay(coin) {
  return (dispatch) => {
    dispatch(SearchTerm(coin));
    dispatch(ApiFetching(true));
    return axios.get('https://min-api.cryptocompare.com/data/histoday?fsym=' + coin + '&tsym=USD&limit=60&aggregate=3&e=CCCAGG')
      .then (
        response => dispatch(coinByDaySuccess(response.data.Data)),
        error => dispatch(ApiFetchError(true, error))
      ).then(() =>
        dispatch(ApiFetching(false)))
  }
}

export function coinByDaySuccess(data){
  console.log('coinbyday', data)
  return {
    type: 'COIN_BY_DAY_SUCCESS',
    items: data
  };
}
