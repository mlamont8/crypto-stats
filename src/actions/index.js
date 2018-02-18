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
    items
  };
}

// When fetching from API

export function ApiFetching(bool) {
  return {
    type: 'API_IS_FETCHING',
    isLoading: bool
  };
}

// Error fetching api

export function ApiFetchError(bool, data) {
  console.log('front has errored', data)
  return {
    type: 'API_FETCH_HAS_ERRORED',
    hasErrored: bool
  };
}
