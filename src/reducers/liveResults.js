const liveResults = (state = {}, action) => {
  switch (action.type) {
    case "INCOMING_LIVE_UPDATE":
      return {
        ...state,
        flag: action.flag,
        price: action.price,
      };

    default:
      return state;
  }
};

export default liveResults;
