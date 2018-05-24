const coinByDay = (state = {}, action) => {
  switch (action.type) {
    case 'FIFTEEN_DAY_UPDATE':
      return {
        ...state,
        fifteenDay: action.newData,
      };

    default:
      return state;
  }
};

export default coinByDay;
