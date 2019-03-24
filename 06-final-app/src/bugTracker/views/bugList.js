import React from 'react';
import BugItem from './bugItem';

class BugList extends React.Component{
	onRemoveClosedClick = () => {
		this.props.removeClosed(this.props.bugs);
	}
	render(){
		let { bugs, toggle } = this.props;
		let bugItems = bugs.map((bug, index) => (
			<BugItem bug={bug} key={index} toggle={toggle}/>
		));
		return(
			 <section className="list">
			 	<ol>
			 		{bugItems}
			 	</ol>
			 	<input type="button" value="Remove Closed" onClick= { this.onRemoveClosedClick }/>
			 </section> 
		)
	}
}

export default BugList;

