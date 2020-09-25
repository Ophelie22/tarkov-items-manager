// == Import : npm
import { createStore, compose, applyMiddleware } from 'redux';

// == Import : local
// import rootReducer from './reducers';
import rootReducer from '../reducers';
import logMiddleware from '../middleware/logMiddleware';
import itemsMiddleware from '../middleware/itemsMiddleware';
import questsMiddleware from '../middleware/questsMiddleware';
import hideoutMiddleware from '../middleware/hideoutMiddleware';
import createAccountMiddleware from '../middleware/createAccountMiddleware';
import followMiddleware from '../middleware/followMiddleware';

// == Enhancers
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(
  applyMiddleware(
    logMiddleware,
    itemsMiddleware,
    questsMiddleware,
    hideoutMiddleware,
    createAccountMiddleware,
    followMiddleware,
  ),
);

// == Store
const store = createStore(
  rootReducer,
  enhancers,
);

// == Export
export default store;
