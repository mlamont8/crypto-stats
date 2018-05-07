const liveResults = (state = {}, action) => {
  switch (action.type) {
    case "INCOMING_LIVE_UPDATE":
      return {
        ...state,
        payload: action.payload
      };

    default:
      return state;
  }
};

export default liveResults;
