import bugApi from '../services/bugApi'

function load(){
	return function(dispatch){
		bugApi
			.getAll()
			.then(function(bugs){
				dispatch({ type : 'LOAD', payload : bugs});
			});
	}
	
}

export default load;