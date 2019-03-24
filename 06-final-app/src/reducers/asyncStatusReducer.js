const initialState = {
	isLoading : false,
	loadMessage : ''
};

function asyncStatusReducer(currentState = initialState, action){
	if (action.type === 'ASYNC_START'){
		return { isLoading : true, loadMessage : action.payload || 'Operation started'};
	} else if (action.type === 'ASYNC_STOP'){
		return { isLoading : false, loadMessage : action.payload || 'Operation completed'};
	} 
	return currentState;
}

export default asyncStatusReducer;