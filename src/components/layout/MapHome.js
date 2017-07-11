import React, {Component} from 'react'
import {Alerts} from '../containers'
import {Map} from '../custom'
import {APIManager} from '../../utils'

class MapHome extends Component{
	constructor(){
		super()
		this.state = {
			venues: []
		}
	}
	componentDidMount(){
/*		ToDo
		APIManager.get('/api/alert', null, (err, response) => {
			if(err){
				alert('Error:' + err.message)
				return
			}

			this.setState({
				venues: response.results
			})

		})*/
	}

	render(){
		const zoom = 11
		const location = {
			lat: 28.1256018,
			lng: -15.4573011
		}


		const markers = [
			{
				position:{
					lat: 28.1256018,
					lng: -15.4573011,
				},
				key: 'Gran Canaria',
				defaultAnimation: 2
			}
		]

		return(
			<div>
				<div style={{width:300, height:600}}>
					<Map
						center={location}
						zoom={zoom}
						markers={markers} /* ToDo: markers -> this.state.venues*/
						containerElement={<div style={{ height:100+'%'}} />}
						mapElement={<div style={{ height:100+'%'}} />}
					 />
				</div>
				<div>
					<Alerts venues={markers} /> /* ToDo: markers -> this.state.venues*/
				</div>
			</div>
		)
	}
}

export default MapHome