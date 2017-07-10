import React, {Component} from 'react'
import Dropzone from 'react-dropzone'

class CreateDrone extends Component{
	render(){
		return(
			<div>
				Create Drone
				<Dropzone style={{border:'none'}}>
					<button>Upload image</button>
				</Dropzone>
			</div>
		)
	}
}
export default CreateDrone