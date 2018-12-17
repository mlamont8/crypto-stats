const searchTerm = (state = {}, action) => {
  switch (action.type) {
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
