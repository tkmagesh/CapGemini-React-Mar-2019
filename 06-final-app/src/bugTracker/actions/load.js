import bugApi from '../services/bugApi'

function load(){
	return function(dispatch){
		dispatch({ type : 'ASYNC_START'});
		bugApi
			.getAll()
			.then(function(bugs){
				dispatch({ type : 'ASYNC_STOP'});
				dispatch({ type : 'LOAD', payload : bugs});
			});
	}
	
}

export default load;