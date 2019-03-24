import { connect } from 'react-redux';
import React from 'react';

class AsyncStatus extends React.Component{
	render(){
		console.log(this.props);
		if (this.props.isLoading)
			return (<div>{this.props.loadMessage}</div>);
		else 
			return null;
	}
}

function mapStateToProps(storeState){
	return storeState.asyncStatus;
}

export default connect(mapStateToProps)(AsyncStatus);
