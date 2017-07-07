import React, {Component} from 'react'
import styles from './styles'
class Zone extends Component{
	render(){
		const style = styles.zone
		const zipCode = this.props.currentZone.zipCodes[0]
		return(
			<div style={style.container}>
				<h2>
				<a href="#"  style={style.title}>{this.props.currentZone.name}</a>
				</h2>
				<span className="detail">{zipCode}</span><br/>
				<span>{this.props.currentZone.num} comments</span>
			</div>
		)
	}
}
export default Zone