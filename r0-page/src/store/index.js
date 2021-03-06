import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import reducer from './reducer';
const reduxer = combineReducers(reducer);

const middleware = [thunk];

const init = {
	config: {
		messageBufferLength: 10,
		roomNumber: 0,
		ban: [],
		admin: [],
		msg_ban: []
	},
	style: {
		admin: {}
	},
	message: []
};
const store = createStore(
	reduxer,
	init,
	composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
