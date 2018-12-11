const searchTerm = (state = {}, action) => {
  switch (action.type) {
    case "SELECTION_ENTERED":
      return {
        ...state,
        [action.id]: action.item,
      };

    case "SEARCH_RESET":
      return {
        ...state,
        market: "",
        convertFrom: "",
        convertTo: ""
      }

    default:
      return state;
  }
};

export default searchTerm;
