import React, {Component} from 'react'

class Header extends Component{
	render(){
		return(
			<header id="header">
				<div className="logo">
					<span className="icon fa-plane"></span>
				</div>
				<div className="content">
					<div className="inner">
						<h1>Dronito</h1>
						<p>System monitorowania terenu zamkniętego<br/>
						bezzałogowymi statkami powietrznymi</p>
					</div>
				</div>
				<nav>
					<ul>
						<li><a href="#intro">Intro</a></li>
						<li><a href="#work">Work</a></li>
						<li><a href="#about">About</a></li>
						<li><a href="#contact">Contact</a></li>
					</ul>
				</nav>
			</header>
		)
	}

}
export default Header