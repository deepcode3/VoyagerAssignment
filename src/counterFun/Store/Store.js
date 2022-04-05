import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
// import CounterReducer from '../reducers/CounterReducers';
import reducers from '../reducers/index';

// const Store = createStore(CounterReducer);
const Store = createStore(reducers, {}, applyMiddleware(thunk));

export default Store;
