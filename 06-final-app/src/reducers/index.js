import { combineReducers } from 'redux';

import bugsReducer from './bugsReducer';
import spinnerReducer from './spinnerReducer';

const rootReducer = combineReducers({
	bugState : bugsReducer,
	spinnerState : spinnerReducer
});

export default rootReducer;