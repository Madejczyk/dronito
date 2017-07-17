import React, {Component} from 'react'
import styles from './styles'

class Content extends Component{
	render(){
		const style = styles.contact
		return(
			<div id="main">
				<article id="contact">
					<h2 className="major">
						C<a href="https://github.com/Madejczyk/dronito" className="icon fa-github"><span className="label">GitHub</span></a>
						ntact
					</h2>
					<form method="post" action="/mail/send">
						<div className="field half first">
							<label>Name</label>
							<input type="text" name="name" id="name" />
						</div>
						<div className="field half">
							<label>Email</label>
							<input type="text" name="sender" id="email" />
						</div>
						<div className="field">
							<label>Message</label>
							<textarea style={style.textArea} name="message" id="message" rows="3"></textarea>
						</div>
						<ul className="actions">
							<li><input type="submit" value="Send Message" className="special" /></li>
							<li><input type="reset" value="Reset" /></li>
						</ul>
					</form>
				</article>
			</div>
		)
	}
}
export default Content