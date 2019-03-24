import { connect } from 'react-redux';
import React from 'react';

class AsyncStatusMessage extends React.Component{
	state = {
		counter : 0
	};
	timerId = 0;
	componentDidMount(){
		this.timerId = setInterval(() => {
			this.setState({ counter : this.state.counter + 1})
		}, 100);
	}
	render(){
		return(
			<div>
				<span>{this.props.loadMessage}</span>
				<span> [ {this.state.counter} ] </span>
			</div>
		)
	}
	componentWillUnmount(){
		console.log('clearing the timer');
		clearInterval(this.timerId);
	}
}


class AsyncStatus extends React.Component{
	
	

	render(){
		if (this.props.isLoading){
			return (
				<AsyncStatusMessage loadMessage={this.props.loadMessage} />
			);
		} else {
			return null;
		}
	}
}

function mapStateToProps(storeState){
	return storeState.asyncStatus;
}

export default connect(mapStateToProps)(AsyncStatus);
