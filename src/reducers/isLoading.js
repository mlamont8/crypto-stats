
const isLoading = (state = {}, action) => {
  switch (action.type) {
    case 'API_HAS_LOADED':
      return {
        ...state,
        apiHasLoaded: action.apiHasLoaded,
      };

    default:
      return state;
  }
};

export default isLoading;
