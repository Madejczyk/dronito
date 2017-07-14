import React, {Component} from 'react'
import styles from './styles'

class Content extends Component{
	render(){
		const style = styles.contact
		return(
			<div id="main">
				<article id="intro">
					<h2 className="major">Intro</h2>
					<span className="image main"><img src="images/pic01.jpg" alt="" /></span>
					<p>Aenean ornare velit lacus, ac varius enim ullamcorper eu. Proin aliquam facilisis ante interdum congue. Integer mollis, nisl amet convallis, porttitor magna ullamcorper, amet egestas mauris. Ut magna finibus nisi nec lacinia. Nam maximus erat id euismod egestas. By the way, check out my <a href="#work">awesome work</a>.</p>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis dapibus rutrum facilisis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Etiam tristique libero eu nibh porttitor fermentum. Nullam venenatis erat id vehicula viverra. Nunc ultrices eros ut ultricies condimentum. Mauris risus lacus, blandit sit amet venenatis non, bibendum vitae dolor. Nunc lorem mauris, fringilla in aliquam at, euismod in lectus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. In non lorem sit amet elit placerat maximus. Pellentesque aliquam maximus risus, vel sed vehicula.</p>
				</article>
				<article id="work">
					<h2 className="major">Work</h2>
					<span className="image main"><img src="images/pic02.jpg" alt="" /></span>
					<p>Adipiscing magna sed dolor elit. Praesent eleifend dignissim arcu, at eleifend sapien imperdiet ac. Aliquam erat volutpat. Praesent urna nisi, fringila lorem et vehicula lacinia quam. Integer sollicitudin mauris nec lorem luctus ultrices.</p>
					<p>Nullam et orci eu lorem consequat tincidunt vivamus et sagittis libero. Mauris aliquet magna magna sed nunc rhoncus pharetra. Pellentesque condimentum sem. In efficitur ligula tate urna. Maecenas laoreet massa vel lacinia pellentesque lorem ipsum dolor. Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis libero. Mauris aliquet magna magna sed nunc rhoncus amet feugiat tempus.</p>
				</article>

				<article id="about">
					<h2 className="major">About</h2>
					<span className="image main"><img src="images/pic03.jpg" alt="" /></span>
					<p>Lorem ipsum dolor sit amet, consectetur et adipiscing elit. Praesent eleifend dignissim arcu, at eleifend sapien imperdiet ac. Aliquam erat volutpat. Praesent urna nisi, fringila lorem et vehicula lacinia quam. Integer sollicitudin mauris nec lorem luctus ultrices. Aliquam libero et malesuada fames ac ante ipsum primis in faucibus. Cras viverra ligula sit amet ex mollis mattis lorem ipsum dolor sit amet.</p>
				</article>

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