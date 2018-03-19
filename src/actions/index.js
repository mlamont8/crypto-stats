import axios from 'axios'
import moment from 'moment'


// Fetch the Full Exchange List with Coins
// BTC fetch as initial coin (remove in final version)
export const fetchExchanges = () => {
  return (dispatch) => {
    dispatch(apiHasLoaded(false));
    return axios.get('https://min-api.cryptocompare.com/data/all/exchanges')
      .then(
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
const marketArrayFetch = (data)=> ({
    type: 'MARKET_ARRAY_FETCHED',
    data
  })





// SUCCESSFUL Exchange Fetch from API

export const exchangeFetchSuccess = (exchanges, bool) => ({
    type: 'EXCHANGE_FETCH_SUCCESS',
    exchanges,
    fetched: bool
})

// When fetching from API

export const apiHasLoaded = (bool) => ({
    type: 'API_HAS_LOADED',
    apiHasLoaded: bool
})


// Error fetching from api

export const ApiFetchError = (bool, data) => ({
    type: 'API_FETCH_HAS_ERRORED',
    hasErrored: bool
})

export const SearchTerm = (result) => ({
    type: 'SEARCH_TERM_ENTERED',
    SearchTerm: result
})



const SelectionEntered = (id, item)  => ({
    type: 'SELECTION_ENTERED',
    id,
    item
  })


// Forms the search terms and the
//  arrays for the upcoming selectors
export const SelectData = (id, item) => {
  return (dispatch, getState) => {
    const exchangeArray = getState().exchanges.exchanges
    dispatch(SelectionEntered(id, item))
    // dispatch(UpcomingArray(id, exchangeArray))
  }
}

// To create the new Arrays after market or coinTo
// selections
// function UpcomingArray(id, exchangeArray) {
//   const actionType
//   console.log(id, exchangeArray, 'upcoming array')
//   if (id === "market"){
//     actionType = 'COIN_TO_ARRAY_CREATED'
//   }else if (id === "coinTo"){
//     actionType = 'COIN_FROM_ARRAY_CREATED'
//   }
//   else {
//     actionType =
//   }
//   return {
//     type: 'COINTO_ARRAY_CREATED',
//     id,
//     exchangeArray
//   }
// }


// Fetch the Coin by day
export const CoinByDay = (coin)  => {
  return (dispatch) => {
    dispatch(SearchTerm(coin));
    // dispatch(ApiFetching(true));
    return axios.get('https://min-api.cryptocompare.com/data/histoday?fsym=' + coin + '&tsym=USD&limit=29&aggregate=1&e=CCCAGG')
      .then(
        response => dispatch(coinByDaySuccess(response.data.Data)),
        error => dispatch(ApiFetchError(true, error))
      )
    // .then(() =>
    //   dispatch(ApiFetching(false)))
  }
}


// Successful Daily Data Retrieval
export const coinByDaySuccess = (data)  => {
  let formattedData = formatTime(data)
  return (dispatch) => {
    dispatch(SevenDayData(formattedData))
    dispatch(ThirtyDayData(formattedData))
  }
}

// Last 7 days
export const SevenDayData = (data) => {
  let newData = data.slice(23)
  return {
    type: 'SEVEN_DAY_UPDATE',
    newData
  }
}
// Last 30 days
export const ThirtyDayData = (data)  => ({
    type: 'THIRTY_DAY_UPDATE',
    data
  })

// Format the time in the json to m/dd/yyyy format
const formatTime = (jsondata) => {
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
