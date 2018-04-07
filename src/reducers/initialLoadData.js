
const initialState = {
  coins: {},
  exchanges: {},
  fetched: false,
};

const initialLoadData = (state = initialState, action) => {
  switch (action.type) {
    case 'EXCHANGE_FETCH_SUCCESS':
      return {
        ...state,
        exchanges: action.exchanges,
        fetched: action.fetched,
      };

    case 'COINLIST_FETCH_SUCCESS':
      return {
        ...state,
        coins: action.coins,
      };

    default:
      return state;
  }
};

export default initialLoadData;
