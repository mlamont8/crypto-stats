
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import cryptoApp from '../reducers';


const configureStore = () => {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const store = createStore(
    cryptoApp,
    composeEnhancers(applyMiddleware(thunk)),
  );
  return store;
};

export default configureStore;
