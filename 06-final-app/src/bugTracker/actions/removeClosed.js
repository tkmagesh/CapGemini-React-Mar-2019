import bugApi from '../services/bugApi';

function removeClosed(){
	return function(dispatch, getState){
		let bugs = getState().bugState;
		let closedBugs = bugs.filter(bug => bug.isClosed);
		closedBugs.forEach(closedBug => {
			bugApi
				.remove(closedBug)
				.then(response => {
					let action = { type : 'REMOVE', payload : closedBug};
					dispatch(action);
				});
		});
		
	}
}
export default removeClosed;