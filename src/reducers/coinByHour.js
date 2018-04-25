const coinByHour = (state = {}, action) => {
  switch (action.type) {
    case 'HOUR_FETCH_SUCCESS':
      return {
        ...state,
        coinByHour: action.data,
      };

    default:
      return state;
  }
};

export default coinByHour;
