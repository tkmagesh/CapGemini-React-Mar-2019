import bugApi from '../services/bugApi';

function addNew(newBugName){
	return function(dispatch){
		var newBugData = { id : 0, name : newBugName, isClosed : false};
		bugApi
			.save(newBugData)
			.then(newBug => {
				var action = { type : 'ADD_NEW', payload : newBug };		
				dispatch(action);
			});
		
	}
}
export default addNew;