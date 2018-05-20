import io from "socket.io-client";
import { take, call, put } from "redux-saga/effects";
import { eventChannel } from "redux-saga"
import { terms } from "./selectors"

// Live results using Socket.io

function* searchResults() {
    const subResults = yield call(terms);
    return `2~${subResults.market}~${subResults.convertFrom}~${
        subResults.convertTo
        }`;
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

    // Raw stream fields when Type === 2 and MaskInt !== ce8
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
    if (stream[0] === "2" && stream[stream.length - 1] !== "ce8") {
        return {
            flag: stream[4],
            price: stream[5],
            time: stream[6],
        }
    }
    return null;

}

export default function* liveWatch() {
    const socket = io.connect("https://streamer.cryptocompare.com/");
    const socketChannel = yield call(subscribe, socket);
    const currentResult = yield call(searchResults);
    socket.emit("SubAdd", { subs: [currentResult] });
    while (true) {
        const payload = yield take(socketChannel);
        const update = streamFormat(payload.split("~"));
        console.log("Payload", payload);
        console.log("new update", update);
        if (update !== null) {
            yield put({
                type: "INCOMING_LIVE_UPDATE",
                update
            });
        }
    }

}