import React from 'react';

class BugEdit extends React.Component{
	state = {
		newBugName : '',
		errorMessage : ''
	};
	onAddNewClick = () => {
		if (this.state.newBugName === ''){
			this.setState({errorMessage : 'New Bug Name cannot be empty!'});
		} else {
			this.setState({errorMessage : ''});
			this.props.addNew(this.state.newBugName);	
		}
		
	}
	render(){
		return(
			<section className="edit">
			 	<label htmlFor="">Bug Name :</label>
			 	<input type="text" onChange={ evt => this.setState({newBugName : evt.target.value}) }/>
			 	<input type="button" value="Add New" onClick={this.onAddNewClick}/>
			 	<div style={{color : 'red'}}>{this.state.errorMessage}</div>
			 </section>
		)
	}
}

export default BugEdit;