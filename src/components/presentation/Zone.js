import React, {Component} from 'react'
import styles from './styles'
class Zone extends Component{
	onSelectTitle(event){
		event.preventDefault()
		this.props.select(this.props.index)
	}

	render(){
		const style = styles.zone
		const zipCode = this.props.currentZone.zipCodes[0]
		const title = (this.props.isSelected) ? <a href="#" style={style.title}>{this.props.currentZone.name}</a> : <a href="#">{this.props.currentZone.name}</a>

		return(
			<div style={style.container}>
				<h2 onClick={this.onSelectTitle.bind(this)}>
					{title}
				</h2>
				<span className="detail">{zipCode}</span><br/>
				<span>{this.props.currentZone.num} comments</span>
			</div>
		)
	}
}
export default Zone