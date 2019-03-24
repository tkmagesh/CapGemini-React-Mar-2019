import { combineReducers } from 'redux';

import bugsReducer from './bugsReducer';
import spinnerReducer from './spinnerReducer';
import asyncStatusReducer from './asyncStatusReducer';

const rootReducer = combineReducers({
	bugState : bugsReducer,
	spinnerState : spinnerReducer,
	asyncStatus : asyncStatusReducer
});

export default rootReducer;