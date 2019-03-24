import React from 'react';

class BugItem extends React.Component{
	
	onBugNameClick = () => {
		this.props.toggle(this.props.bug);
	}
	render(){
		let { bug } = this.props;
		let bugStyle = 'bugname ' + (bug.isClosed ? 'closed' : '');
		return(
			<li>
	 			<span className={bugStyle} onClick={() => this.onBugNameClick()}>
	 				{bug.name}
	 			</span>
	 			<div className="datetime">[Created At]</div>
	 		</li>
		)
	}
}
export default BugItem;