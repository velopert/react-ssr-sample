import { createStore, applyMiddleware, compose } from 'redux';
import Thunk from 'redux-thunk';
import rootReducer from './modules';

const configureStore = (preloadedState) => {
  // apply redux devtool only in development ENV.
  const isDev = process.env.NODE_ENV === 'development';
  const devTools = isDev && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
  const composeEnhancers = devTools || compose;
  
  const store = createStore(
    rootReducer, preloadedState, composeEnhancers(applyMiddleware(Thunk))
  );
  
  return store;  
}

export default configureStore;