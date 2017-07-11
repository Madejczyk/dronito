import React, {Component} from 'react'

class CreateAlert extends Component{
	constructor(){
		super()
		this.state = {
			alert: {
				lat: 0,
				lng: 0,
				key: ''
			}
		}
	}

	updateAlert(event){
		let updatedAlert = Object.assign({}, this.state.zone)
		updatedAlert[event.target.id] = event.target.value
		this.setState({
			alert: updatedAlert
		})
	}
	submitAlert(event){
		this.props.onCreate(this.state.alert)
	}

	render(){
		return(
			<div>
				<h3>Create Alert</h3>
				<input id="lat" onChange={this.updateAlert.bind(this)} className="form-control" type="text" placeholder="Latitude" />
				<input id="lng" onChange={this.updateAlert.bind(this)} className="form-control"  type="text" placeholder="Longitude" />
				<input id="key" onChange={this.updateAlert.bind(this)} className="form-control"  type="text" placeholder="Key" />
				<button onClick={this.submitAlert.bind(this)} className="btn btn-danger">Add alert </button>
			</div>
		)
	}
}

export default CreateAlert