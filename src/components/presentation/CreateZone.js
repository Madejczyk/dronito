import React, {Component} from 'react'

class CreateZone extends Component{
	constructor(){
		super()
		this.state = {
			zone: {
				name: '',
				zipCode: ''
			}
		}
	}

	updateZone(event){
		let updatedZone = Object.assign({}, this.state.zone)
		updatedZone[event.target.id] = event.target.value
		this.setState({
			zone: updatedZone
		})
	}
	submitZone(event){
		let updated = Object.assign({}, this.state.zone)
		updated['zipCodes'] = updated.zipCode.split(',')
		this.props.onCreate(updated)
	}

	render(){
		return(
			<div>
				<input id="name" onChange={this.updateZone.bind(this)} className="form-control" type="text" placeholder="Name" />
				<input id="zipCode" onChange={this.updateZone.bind(this)} className="form-control"  type="text" placeholder="Zip code" />
				<button onClick={this.submitZone.bind(this)} className="btn btn-danger">Add zone </button>
			</div>
		)
	}
}

export default CreateZone