const searchArrays = (state = {}, action) => {
  switch (action.type) {
    case "MARKET_LIST_CREATED":
      return {
        ...state,
        marketArray: action.exchanges,
        currentArray: Object.keys(action.exchanges)
      };

    case "CREATE_CONVERT_FROM":
      console.log(Object.keys(action.exchangeResults.marketArray[action.item]))
      return {
        ...state,
        convertFrom: action.exchangeResults.marketArray[action.item],
        currentArray: Object.keys(action.exchangeResults.marketArray[action.item])
      };

    case "CREATE_CONVERT_TO":
      return {
        ...state,
        convertTo: action.convertFrom[action.item],
        currentArray: action.convertFrom[action.item]
      };

    default:
      return state;
  }
};

export default searchArrays;
