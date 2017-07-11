import React, {Component} from 'react'

class Alerts extends Component{
	render(){

		const alertList = this.props.venues.map((ale, i) =>{
			return(
				<li key={i}>{ale.key}</li>
			)
		})

		return(
			<div>
				Alerts
				<ol>
					{alertList}
				</ol>
			</div>
		)
	}
}

export default Alerts