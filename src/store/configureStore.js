import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import cryptoApp from "../reducers";
import mySaga from "../sagas";

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();
const configureStore = () => {
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const store = createStore(
    cryptoApp,
    composeEnhancers(applyMiddleware(sagaMiddleware))
  );
  // then run the saga
  sagaMiddleware.run(mySaga);

  return store;
};

export default configureStore;
