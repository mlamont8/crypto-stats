import axios from 'axios'

<<<<<<< HEAD
//json.results does not work correctly
  export function fetchCoinList(){
    return (dispatch) => {
        dispatch(ApiFetching(true));
        axios.get('https://min-api.cryptocompare.com/data/all/coinlist')
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                dispatch(ApiFetching(false));
                return response;
            })
            .then((response) => response.json())
            .then((json) =>
                dispatch(coinFetchSuccess(json.results)))
            .catch((json) => dispatch(ApiFetchError(true, json.results)));
    
          }
        }

        // SUCCESSFUL async call

        export function coinFetchSuccess(items) {
          console.log('Action, coinlist fetch success', items.Data)
          return {
              type: 'FRONT_FETCH_DATA_SUCCESS',
              coinlist: items.Data
          };
      }

      // fetching api

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
=======

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

function coinFetchSuccess(items) {
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
>>>>>>> 0951c8debc7871d0cc423a32a8a9fea731fcab83
