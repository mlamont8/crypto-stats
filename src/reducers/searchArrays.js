const searchArrays = (state = { currentID: 'market' }, action) => {
  switch (action.type) {
    case "MARKET_LIST_CREATED":
      return {
        ...state,
        marketArray: action.exchanges,
        currentArray: Object.keys(action.exchanges)
      };

    case "CREATE_CONVERT_FROM":
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
    case "CLOSE_MODAL":
    case "SEARCH_RESET":
    case "INITIAL_SEARCH":
      return {
        ...state,
        currentArray: Object.keys(action.currentArray),
        currentID: "market"
      };
    case "NEW_SEARCH":
      return {
        ...state,
        currentArray: action.currentArray,
      }

    case "ID_UPDATE":
      return {
        ...state,
        currentID: action.id
      }

    // case "INITIAL_SEARCH":
    //   return {
    //     ...state,
    //     currentID: action.id,
    //     currentArray: Object.keys(action.currentArray),
    //   }
    default:
      return state;
  }
};

export default searchArrays;
