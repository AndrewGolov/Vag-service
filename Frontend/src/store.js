import { createStore, combineReducers, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk';
import { userReducer, accReducer, scheduleReducer } from './reducer';

const reducer = combineReducers({
	user: userReducer,
	acc: accReducer,
	schedule: scheduleReducer,
});

export const store = createStore(reducer, applyMiddleware(thunk));
