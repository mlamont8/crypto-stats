import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { createEpicMiddleware } from "redux-observable";
import { rootReducer, rootEpic } from "../reducers";

const epicMiddleware = createEpicMiddleware(rootEpic);

const configureStore = () => {
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk, epicMiddleware))
  );
  return store;
};

export default configureStore;
