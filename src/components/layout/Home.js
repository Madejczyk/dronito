import React, {Component} from 'react'
import {Content, Footer, Header} from './'

class Home extends Component{
	render(){
		return(
			<div id="wrapper">
				<Header/>
				<Content/>
				<Footer/>
			</div>
		)
	}
}
export default Home