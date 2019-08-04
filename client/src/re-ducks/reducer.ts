import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import itemReducer from 're-ducks/modules/item';

const rootReducer = combineReducers({
  form: formReducer,
  item: itemReducer
});

export default rootReducer;
