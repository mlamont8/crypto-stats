const CoinURL = (state = {}, action) => {
  switch (action.type) {
    case 'COIN_LOOKUP':
      if (action.coin) {
        return {
          ...state,
          [action.id]: action.coin.ImageUrl,
        };
      }
      return {
        ...state,
        [action.id]: '',
      };

    default:
      return state;
  }
};

export default CoinURL;
