import React, {Component} from 'react'
import {withGoogleMap, GoogleMap, Marker} from 'react-google-maps'

class Map extends Component{
	constructor(){
		super()
		this.state = {
			map: null,
		}
	}

	mapMoved(map){
		//console.log('mapMoved:' +JSON.stringify(map.getCenter()))
	}

	zoomChanged(){
		//console.log('zoomChanged: ' +this.state.map.getZoom())
	}
	mapLoaded(map){
		if (this.state.map != null)
			return

		this.setState({
			map: map
		})
	}

	render(){
		//Default values if props didn't exists 	
		const markers = this.props.markers || []	
		return(
			<GoogleMap
				ref={this.mapLoaded.bind(this)}
				onDragEnd={this.mapMoved.bind(this)}
			    onZoomChanged={this.zoomChanged.bind(this)}
			    defaultZoom={this.props.zoom}
			    defaultCenter={this.props.center}>
				    {markers.map(marker => (
				    		<Marker {...marker} />
				    ))}
			</GoogleMap>
		)
	}
}

export default withGoogleMap(Map)