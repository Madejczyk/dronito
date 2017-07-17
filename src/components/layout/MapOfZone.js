import React, {Component} from 'react'
import {Map} from '../custom'

class MapOfZone extends Component{
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
				<h2 className="major">Zones</h2>
				<div style={{width:550, height:300}}>
					<Map
						center={location}
						zoom={zoom}
						markers={markers}
						containerElement={<div style={{ height:100+'%'}} />}
						mapElement={<div style={{ height:100+'%'}} />}
					 />
				</div>
				<p>Aenean ornare velit lacus, ac varius enim ullamcorper eu. Proin aliquam facilisis ante interdum congue. Integer mollis, nisl amet convallis, porttitor magna ullamcorper, amet egestas mauris. Ut magna finibus nisi nec lacinia. Nam maximus erat id euismod egestas. By the way, check out my <a href="#work">awesome work</a>.</p>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis dapibus rutrum facilisis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Etiam tristique libero eu nibh porttitor fermentum. Nullam venenatis erat id vehicula viverra. Nunc ultrices eros ut ultricies condimentum. Mauris risus lacus, blandit sit amet venenatis non, bibendum vitae dolor. Nunc lorem mauris, fringilla in aliquam at, euismod in lectus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. In non lorem sit amet elit placerat maximus. Pellentesque aliquam maximus risus, vel sed vehicula.</p>
*/			</div>
		)
	}
}

export default MapOfZone