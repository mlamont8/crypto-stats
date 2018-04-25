
/*   ~~  Initial Load Actions        */

// Error fetching from api

export const ApiFetchError = bool => ({
  type: "API_FETCH_HAS_ERRORED",
  hasErrored: bool
});

// Actions for Selectors in form

export const CreateConvertFrom = (item, exchangeResults) => ({
  type: "CONVERT_FROM_LIST_CREATED",
  item,
  exchangeResults
});

export const MarketSelectionEntered = (id, item) => ({
  type: "MARKET_SELECTION_ENTERED",
  id,
  item
});

// send coin info to reducer
export const CoinInfoObject = (coinObject, id) => ({
  type: "COIN_LOOKUP",
  id,
  coin: coinObject
});

// Get coin info on form select from full coin object
const LookupCoin = (id, item) => (dispatch, getState) => {
  const coinObject = getState().initialLoadData.coins;
  const coinLookup = coinObject[item];
  dispatch(CoinInfoObject(coinLookup, id));
};

export const ConvertFromEntered = (id, item) => ({
  type: "CONVERT_FROM_ENTERED",
  id,
  item
});

export const ConvertToEntered = (id, item) => ({
  type: "CONVERT_TO_ENTERED",
  id,
  item
});

export const CreateConvertTo = (item, convertFrom) => ({
  type: "CONVERT_TO_LIST_CREATED",
  item,
  convertFrom
});



export const DoSearch = () => ({
  type: "SEARCH_REQUEST"
})


// Forms the search terms and the
//  arrays for the upcoming selectors
export const SelectData = (id, item) => (dispatch, getState) => {
  if (id === "market") {
    const exchangeArray = getState().searchArrays.marketArray;
    dispatch(MarketSelectionEntered(id, item));
    dispatch(CreateConvertFrom(item, exchangeArray));
  } else if (id === "convertFrom") {
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
