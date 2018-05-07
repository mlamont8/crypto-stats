// import io from "socket.io-client";
// import { take, call, put } from "redux-saga/effects";
// import { eventChannel } from "redux-saga"
// import { terms } from "./index"

// function* searchResults() {
//     const subResults = yield call(terms);
//     return `2~${subResults.market}~${subResults.convertFrom}~${
//         subResults.convertTo
//         }`;
// }

// function subscribe(socket) {
//     return eventChannel(emit => {
//         const eventHandler = event => {
//             emit(event);
//         };
//         socket.on("m", eventHandler);

//         const unsubscribe = () => {
//             socket.emit("SubRemove", { subs: [searchResults] });
//         };

//         return unsubscribe;
//     });
// }

// export default function* liveWatch() {
//     const socket = io.connect("https://streamer.cryptocompare.com/");
//     const socketChannel = yield call(subscribe, socket);
//     const currentResult = yield call(searchResults);
//     socket.emit("SubAdd", { subs: [currentResult] });
//     while (true) {
//         const payload = yield take(socketChannel);
//         const update = payload.split("~");
//         if (update[0] === "2") {
//             yield put({ type: "INCOMING_LIVE_UPDATE", flag: update[4], price: update[5] });
//         }
//     }
// }

// // export default liveWatch;