import { combineReducers } from 'redux';
import CounterReducer from './CounterReducers';
import NameReducer from './nameReducer';
// import accountReducer from './accountReducers';

const reducers = combineReducers({
  // account: accountReducer,
  account: CounterReducer,
  name: NameReducer,
});
export default reducers;
