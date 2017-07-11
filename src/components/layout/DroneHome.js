import React, {Component} from 'react'
import {Drones} from '../containers'
class DroneHome extends Component{
	render(){
		return(
			<div className='container'>
				<div className='row'>
					<div className='col-md-4'>
						Account
					</div>
					<div className='col-md-8'>
						<Drones />
					</div>
				</div>
			</div>
		)
	}
}
export default DroneHome