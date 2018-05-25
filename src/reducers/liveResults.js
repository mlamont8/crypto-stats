import { liveTime } from "../helpers";

const initialState = [{
  id: 0,
}]
const liveResults = (state = initialState, action) => {
  switch (action.type) {
    case "INCOMING_LIVE_UPDATE":
      return [
        ...state,
        {
          counter: action.counter,
          id: action.id,
          flag: action.update.flag,
          price: action.update.price,
          time: liveTime(action.update.time)
        }
      ];

    default:
      return state;
  }
};

export default liveResults;
