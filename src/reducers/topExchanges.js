const topExchanges = (state = {}, action) => {
  switch (action.type) {
    case 'EXCHANGE_FETCH_SUCCESS':
      return {
        ...state,
        data: action.data,
      };

    default:
      return state;
  }
};

export default topExchanges;
