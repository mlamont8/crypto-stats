const CoinId = (state = {}, action) => {
  switch (action.type) {
    case "COIN_LOOKUP":
      if (action.coin) {
        return {
          ...state,
          [action.id]: action.coin.Id
        };
      }
      return {
        ...state,
        [action.id]: ""
      };

    default:
      return state;
  }
};

export default CoinId;
