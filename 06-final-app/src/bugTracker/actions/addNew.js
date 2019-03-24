function addNew(newBugName){
	var newBug = { name : newBugName, isClosed : false};
	var action = { type : 'ADD_NEW', payload : newBug };
	return action;
}
export default addNew;