import React, {Component} from 'react'
import styles from './styles'

export default (props) => {
	const style = styles.widget
	return(
		<div onClick={props.onToggle.bind(this)} style={style.title}>
			Current alerts
		</div>
	)
}