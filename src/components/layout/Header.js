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
						<p>Closed area monitoring system</p>
						<p>using Unmanned aerial vehicle</p>
					</div>
				</div>
				<nav>
					<ul>
						<li><a href="#intro">Zone</a></li>
						<li><a href="#work">Drones</a></li>
						<li><a href="#about">Alerts</a></li>
						<li><a href="#contact">Contact</a></li>
					</ul>
				</nav>
			</header>
		)
	}

}
export default Header