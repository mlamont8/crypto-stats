import io from "socket.io-client";
import { take, call, put } from "redux-saga/effects";
import { eventChannel } from "redux-saga";
import { terms } from "./selectors";

// Live results using Socket.io

// Recalls Search terms from state and returns proper format
function* searchResults() {
  const subResults = yield call(terms);
  return `2~${subResults.market}~${subResults.convertFrom}~${subResults.convertTo}`;
}

function subscribe(socket) {
  return eventChannel(emit => {
    const eventHandler = event => {
      emit(event);
    };
    socket.on("m", eventHandler);

    const unsubscribe = () => {
      socket.emit("SubRemove", { subs: [searchResults] });
    };

    return unsubscribe;
  });
}

const streamFormat = stream => {
  // Collect stream when fields of Type === 2 and MaskInt !== ce8
  // 0 {Type}
  // 1 {ExchangeName}
  // 2 {FromCurrency}
  // 3 {ToCurrency}
  // 4 {Flag}
  // 5 {Price}
  // 6 {LastUpdate}
  // 7 {LastVolume}
  // 8 {LastVolumeTo}
  // 9 {LastTradeId}
  // 10 {Volume24h}
  // 11 {Volume24hTo}
  // 12 {MaskInt}
  // MaskInt describes the format of raw stream
  // The only usable MaskInts end in fe9

  const maskInt = stream[stream.length - 1];
  if (stream[0] === "2" && maskInt.substr(-3) === "fe9") {
    return {
      flag: stream[4],
      price: stream[5],
      time: stream[6]
    };
  }
  return null;
};

export default function* liveWatch(searchesThisSession) {
  let payloadId = 0;
  const socket = io.connect("https://streamer.cryptocompare.com/");
  const socketChannel = yield call(subscribe, socket);
  const currentResult = yield call(searchResults);
  socket.emit("SubAdd", { subs: [currentResult] });
  while (true) {
    const payload = yield take(socketChannel);
    const update = streamFormat(payload.split("~"));

    if (update !== null) {
      yield put({
        type: "INCOMING_LIVE_UPDATE",
        searchesThisSession,
        id: (payloadId += 1),
        update
      });
    }
  }
}
