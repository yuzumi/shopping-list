import { createStore } from 'redux';
import rootReducer from 're-ducks/reducer';

const store = createStore(rootReducer);

export default store;
