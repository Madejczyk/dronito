import React, {Component} from 'react'
import {Content, Footer, Header} from "./"
import {Widget} from '../containers'

class Home extends Component{
	render(){
		return(
			<div id="wrapper">
				<Header/>
				<Content/>
				<Footer/>
				<Widget/>
			</div>
		)
	}
}
export default Home