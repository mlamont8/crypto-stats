const loadingState = { fetching: false };

const isLoading = (state = loadingState, action) => {
  switch (action.type) {
    case "EXCHANGE_FETCH_REQUESTED":
    case "SEARCH_REQUEST":
      return {
        ...state,
        fetching: true
      };

    case "FETCH_SUCCESS":
      return {
        ...state,
        fetching: false
      };

    default:
      return state;
  }
};

export default isLoading;
