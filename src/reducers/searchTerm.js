const searchTerm = (state = {}, action) => {
  switch (action.type) {
    case "SELECTION_ENTERED":
      return {
        ...state,
        [action.id]: action.item
      };

    default:
      return state;
  }
};

export default searchTerm;
