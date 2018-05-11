const byDollar = (state = {}, action) => {
  switch (action.type) {
    case "DOLLAR_CONVERSION":
      return {
        ...state,
        coinConversion: action.dollars
      };

    default:
      return state;
  }
};

export default byDollar;
