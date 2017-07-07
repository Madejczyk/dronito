import React, {Component} from 'react'
import Comment from '../presentation/Comment'
import styles from './styles'
import superagent from 'superagent'

class Comments extends Component{
	constructor(){
		super()
		this.state = {
			comment: {
				username: '',
				body: '',
				timestamp: '',
			},
			list: []
		}
	}

	componentDidMount(){
		superagent
		.get('/api/comment')
		.query(null)
		.set('Accept', 'application/json')
		.end((err,response) => {
			if(err){
				alert('Error:' + err)
				return
			}
			
			let results = response.body.results
			this.setState({
				list: results
			})
		})
	}

	updateComment(event){
		let updatedComment = Object.assign({}, this.state.comment)
		updatedComment[event.target.id] = event.target.value
		this.setState({
			comment: updatedComment
		})
	}

	submitComment(){
		console.log("test" + JSON.stringify(this.state.comment))
		let updatedList = Object.assign([], this.state.list)
		updatedList.push(this.state.comment)

		this.setState({
			list: updatedList
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

				<input id="username" onChange={this.updateComment.bind(this)} className="form-control" type="text" placeholder="Username" />
				<input id="body" onChange={this.updateComment.bind(this)} className="form-control" type="text" placeholder="Comment" />
				<input id="timestamp" onChange={this.updateComment.bind(this)} className="form-control" type="text" placeholder="Time" />
				<button onClick={this.submitComment.bind(this)} className="btn btn-info">Submit</button>
			</div>
		)
	}
}

export default Comments