import { Observable } from "rxjs";

export const live = (state = {}, action) => {
  switch (action.type) {
    case "LIVE_UPDATE":
      return {
        ...state,
        payload: action.payload
      };
    default:
      return state;
  }
};

export const liveEpic = action$ =>
  action$.ofType("LIVE_CONNECTED").switchMap(action =>
    Observable.webSocket("ws://localhost:8081").map(response => ({
      type: "LIVE_UPDATE",
      payload: response
    }))
  );
