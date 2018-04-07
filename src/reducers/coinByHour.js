const coinByHour = (state = {}, action) => {
  switch (action.type) {
    case 'DATA_BY_HOUR':
      return {
        ...state,
        coinByHour: action.data,
      };

    default:
      return state;
  }
};

export default coinByHour;
