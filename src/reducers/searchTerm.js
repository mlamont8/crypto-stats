const searchTerm = (state = {}, action) => {
  switch (action.type) {
    // For each entry, add temporary value
    case "SELECTION_ENTERED":
      return {
        ...state,
        [action.id]: action.item,
      };
    case "CLOSE_MODAL":
    case "SEARCH_MODAL":
    case "SEARCH_RESET":
      return {
        ...state,
        market: "",
        convertFrom: "",
        convertTo: ""
      };

    // terms that are sent to API to search for
    case "API_CALL":
      return {
        ...state,
        currentMarket: action.results.market,
        currentFrom: action.results.convertFrom,
        currentTo: action.results.convertTo,
      };

    // clear current items
    case "CLEAR_CURRENT":
      return {
        ...state,
        currentMarket: "",
        currentFrom: "",
        currentTo: "",
      };


    //  If opening modal then reset searchterms, else
    //  Return current state if modal is closing
    case "MODAL_TOGGLE":
      if (action.toggle) {
        return {
          ...state,
          market: "",
          convertFrom: "",
          convertTo: ""
        }
      } else {
        return {
          ...state
        }
      }

    default:
      return state;
  }
};

export default searchTerm;
