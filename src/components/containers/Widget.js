import React, {Component} from 'react'
import {ToggleBar} from '../presentation'
import styles from './styles'

class Widget extends Component{
	constructor(){
		super()
		this.state ={
			showAlerts: false,
			alerts: []
		}
	}

	componentDidMount(){
		firebase.database().ref('messages/').on('value', (snapshot) =>{
			const currentAlerts = snapshot.val()

			if (currentAlerts != null){
				this.setState({
					alerts: currentAlerts
				})
			}
		})
	}

	toggleAlerts(){
		this.setState({
			showAlerts: !this.state.showAlerts
		})
	}

	render(){
		const style = styles.widget
		const currentAlert = this.state.alerts.map((ale, i) =>{
			return(
				<li key={ale.id}>{ale.text}</li>
			)
		})

		if (this.state.showAlerts){
			return (
				<div style={style.alerts}>
					<ol>
						{currentAlert}
					</ol>
					<ToggleBar onToggle={this.toggleAlerts.bind(this)} />
				</div>
			)
		}

		return(
			<ToggleBar onToggle={this.toggleAlerts.bind(this)} />
		)
	}
}

export default Widget