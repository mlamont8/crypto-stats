const searchArrays = (state = {}, action) => {
  switch (action.type) {
    case 'MARKET_LIST_CREATED':
      return {
        ...state,
        marketArray: action.data,
      };

    case 'CONVERT_FROM_LIST_CREATED':
      return {
        ...state,
        convertFrom: action.exchangeResults[action.item],
      };

    case 'CONVERT_TO_LIST_CREATED':
      return {
        ...state,
        convertTo: action.convertFrom[action.item],
      };

    default:
      return state;
  }
};

export default searchArrays;
