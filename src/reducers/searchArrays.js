const searchArrays = (state = { currentID: "market" }, action) => {
  switch (action.type) {
    case "MARKET_LIST_CREATED":
      return {
        ...state,
        marketArray: action.exchanges,
        currentArray: Object.keys(action.exchanges)
        // markets: Object.keys(action.exchanges).map(val => {
        //   return { value: val, label: val, trigger: "coin-retrieve" };
        // })
      };

    case "CREATE_CONVERT_FROM":
      return {
        ...state,
        convertFrom: action.exchangeResults.marketArray[action.item],
        currentArray: Object.keys(
          action.exchangeResults.marketArray[action.item]
        )
      };

    case "CREATE_CONVERT_TO":
      return {
        ...state,
        convertTo: action.convertFrom[action.item],
        currentArray: action.convertFrom[action.item]
      };

    case "CLOSE_MODAL":
    case "SEARCH_MODAL":
    case "SEARCH_RESET":
      return {
        ...state,
        currentArray: Object.keys(action.currentArray),
        currentID: "market"
      };

    case "ID_UPDATE":
      return {
        ...state,
        currentID: action.id
      };

    case "COIN_LISTING_ERROR":
      return {
        ...state,
        currentArray: null
      };

    default:
      return state;
  }
};

export default searchArrays;
