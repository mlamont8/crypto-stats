import { liveTime } from "../helpers";

const liveResults = (state = {}, action) => {
  switch (action.type) {
    case "INCOMING_LIVE_UPDATE":
      return {
        ...state,
        flag: action.update.flag,
        price: action.update.price,
        time: liveTime(action.update.time)
      };

    default:
      return state;
  }
};

export default liveResults;
