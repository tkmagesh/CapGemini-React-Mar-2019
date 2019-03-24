import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import BugStats from './views/bugStats';
import BugSort from './views/bugSort';
import BugEdit from './views/bugEdit';
import BugList from './views/bugList';

import bugActionCreators from './actions';

class BugTracker extends React.Component{
	render(){
		let { bugs, toggle, addNew, removeClosed, load } = this.props;
		return(
			<React.Fragment>

				<input type="button" value="Load" onClick={load} />
				
				{/* BugStats */}
				<BugStats bugs={bugs} />

				{/* BugSort */}
				<BugSort /> 

				{/* BugEdit */}
				<BugEdit addNew={addNew} /> 

				{/* BugList */}
				<BugList {...{bugs, removeClosed, toggle}} />
			</React.Fragment>
		)
	}
}

function mapStateToBugTrackerProps(storeState){
	let bugs = storeState.bugState;
	return { bugs : bugs };
}

function mapDispatchToBugTrackerProps(dispatch){
	var bugActionDispatchers = bindActionCreators(bugActionCreators, dispatch);
	return bugActionDispatchers;
}

export default connect(
	mapStateToBugTrackerProps,
	mapDispatchToBugTrackerProps
)(BugTracker);
