import io from "socket.io-client";
import { take, call, put } from "redux-saga/effects";
import { eventChannel } from "redux-saga"
import { terms } from "./selectors"

// Live results from websocket

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

export default function* liveWatch() {
    const socket = io.connect("https://streamer.cryptocompare.com/");
    const socketChannel = yield call(subscribe, socket);
    const currentResult = yield call(searchResults);
    socket.emit("SubAdd", { subs: [currentResult] });
    let payload = yield take(socketChannel);
    console.log("initial update", payload);
    let update = payload.split("~");
    yield put({
        type: "INCOMING_LIVE_UPDATE",
        flag: update[4],
        price: update[5]
    });
    while (true) {
        payload = yield take(socketChannel);
        update = payload.split("~");
        console.log("new update", update);
        // only update if flag field is not 4
        if (update[0] === "2" && update[4] !== "4") {
            yield put({
                type: "INCOMING_LIVE_UPDATE",
                flag: update[4],
                price: update[5]
            });
        }
    }
}