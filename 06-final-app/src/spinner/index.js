import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class Spinner extends React.Component{
	state = {
		delta : 1
	};

	render(){
		let { spinnerValue, up, down, doubleUp, doubleDown } = this.props;
		return (
			<div>
				<input type="number" onChange={ evt => this.setState({ delta : evt.target.valueAsNumber })} />
				<br/>
				<input type="button" value="DOUBLE DOWN" onClick={doubleDown} />
				<input type="button" value="DOWN" onClick={ () => down(this.state.delta)} />
				<span> [ {spinnerValue} ] </span>
				<input type="button" value="UP" onClick={() => up(this.state.delta)} />
				<input type="button" value="DOUBLE UP" onClick={doubleUp} />
			</div>
		);
	}
}

var spinnerActionCreators = {
	up(delta = 1){
		let action = { type : 'UP', payload : delta };	
		return action;
	},
	down(delta = 1){
		let action = { type : 'DOWN', payload : delta };	
		return action;
	},
	doubleUp(){
		let action = { type : 'DOUBLE_UP' };	
		return action;	
	},
	doubleDown(){
		let action = { type : 'DOUBLE_DOWN' };	
		return action;
	}
};

/* Connect Logic for spinner */
function mapStateToSpinnerProps(storeState){
	var spinnerValue = storeState.spinnerState;
	return { spinnerValue : spinnerValue };
}

function mapDispatchToSpinnerProps(dispatch){
	let spinnerActionDispatchers = bindActionCreators(spinnerActionCreators, dispatch);
	return spinnerActionDispatchers;
}

export default connect(
	mapStateToSpinnerProps,
	mapDispatchToSpinnerProps
)(Spinner);
