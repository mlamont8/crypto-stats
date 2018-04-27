const searchArrays = (state = {}, action) => {
  switch (action.type) {
    case "MARKET_LIST_CREATED":
      return {
        ...state,
        marketArray: action.exchanges
      };

    case "CREATE_CONVERT_FROM":
      return {
        ...state,
        convertFrom: action.exchangeResults[action.item]
      };

    case "CREATE_CONVERT_TO":
      return {
        ...state,
        convertTo: action.convertFrom[action.item]
      };

    default:
      return state;
  }
};

export default searchArrays;
