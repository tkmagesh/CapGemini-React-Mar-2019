var SM = (function(){
	var _currentState = undefined,
		_reducer = null,
		_listeners = [],
		_init_action = '@@INIT';


	function getState(){
		return _currentState;
	}

	function subscribe(listenerFn){
		_listeners.push(listenerFn);
	}

	function triggerChange(){
		_listeners.forEach(listenerFn => listenerFn());
	}

	function dispatch(action){
		var result = _reducer(_currentState, action);
		if (result === _currentState ) return;
		_currentState = result;
		triggerChange();
	}

	function createStore(reducer){
		//validate reducer
		_reducer = reducer;
		_currentState = reducer(_currentState, _init_action);
		return {
			getState, subscribe, dispatch
		};
	}

	return { 
		createStore
	};
})();