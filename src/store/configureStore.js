
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk'
import cryptoApp from '../reducers';



export default function configureStore(initialState) {

  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const store = createStore(
    cryptoApp,
    initialState,
    composeEnhancers(
    applyMiddleware(thunk)
  ));



  return store;
}