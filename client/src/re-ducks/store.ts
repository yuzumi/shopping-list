import { createStore, applyMiddleware } from 'redux';
import rootReducer from 're-ducks/reducer';
import middleware from 're-ducks/middleware';

const store = createStore(rootReducer, applyMiddleware(...middleware));

export default store;
