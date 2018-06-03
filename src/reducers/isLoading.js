const loadingState = { fetching: false, firstLoad: true };

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
        fetching: false,

      };

    case "INITIAL_LOAD":
      return {
        ...state,
        firstLoad: action.status
      };

    case "NEW_SEARCH":
      return {
        ...state,
        firstLoad: action.status
      }

    default:
      return state;
  }
};

export default isLoading;
