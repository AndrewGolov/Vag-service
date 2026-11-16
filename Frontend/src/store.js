import { createStore, combineReducers, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk';
import { userReducer, accReducer } from './reducer';

const reducer = combineReducers({
	user: userReducer,
	acc: accReducer,
});

export const store = createStore(reducer, applyMiddleware(thunk));
