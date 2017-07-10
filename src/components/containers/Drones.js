import React, {Component} from 'react'
import {APIManager} from '../../utils'
import {connect} from 'react-redux'
import actions from '../../actions'
import {CreateDrone} from '../presentation'

class Drones extends Component{
	componentDidMount(){
		this.props.fetchDrones(null)
	}

	render(){
		const list = this.props.drones.list.map((drone, i) =>{
			return(
				<li key={drone.id}>{drone.model}</li>
			)
		})

		return(
			<div>
				Drones Container
				<CreateDrone />
				<ol>
					{list}
				</ol>
			</div>
		)
	}
}

const stateToProps = (state) => {
	return {
		drones: state.drone
	}
}

const dispatchToProps = (dispatch) => {
	return {
		fetchDrones: (params) => dispatch(actions.fetchDrones(params))
	}
}

export default connect(stateToProps, dispatchToProps)(Drones)