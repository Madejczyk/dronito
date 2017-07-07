import React, {Component} from 'react'
import styles from './styles'

class Comment extends Component{
	render(){
		const style = styles.comment
		return(		
			<div style={style.commentElement}>
				<span style={{fontSize:20, fontWeight:600}}>
					{this.props.currentComment.username} -
					{this.props.currentComment.timestamp}
				</span>
				<p>
					{this.props.currentComment.body}
				</p>
			</div>
		)
	}
}

export default Comment