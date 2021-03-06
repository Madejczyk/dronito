import React, {Component} from 'react'
import {CreateComment, Comment} from '../presentation'
import styles from './styles'
import {APIManager} from '../../utils'

class Comments extends Component{
	constructor(){
		super()
		this.state = {
			list: []
		}
	}

	componentDidMount(){
		APIManager.get('/api/comment', null, (err, response) => {
			if(err){
				alert('Error:' + err.message)
				return
			}

			this.setState({
				list: response.results
			})
		})
	}

	submitComment(comment){
		let updatedComment = Object.assign({}, comment)
		APIManager.post('/api/comment', updatedComment, (err, response) =>{
			if(err){
				alert(err)
				return
			}
			let updatedList = Object.assign([], this.state.list)
			updatedList.push(response.results)
			this.setState({
				list: updatedList
			})
 
		})
	}

	render(){
		const style = styles.comment
		const commentList = this.state.list.map((comment, i) =>{
			return(
				<li key={i}><Comment currentComment={comment} /></li>
			)
		})
		return(
			<div>
				<h2>Comments: Zone 1</h2>
				<div style={style.commentsBox}>				
					<ul style={style.commentsList}>
						{commentList}
					</ul>
				</div>

				<CreateComment onCreate={this.submitComment.bind(this)} />
			</div>
		)
	}
}

export default Comments