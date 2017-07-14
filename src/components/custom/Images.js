import React, {Component} from 'react'
import Dropzone from 'react-dropzone'
import sha1 from 'sha1'
import superagent from 'superagent'

class Images extends Component{
	constructor(){
		super()
		this.state = {
			images: []
		}
	}

	uploadFile(files){

		const image = files[0]

		const cloudName ='madejczyk'

		const url = 'https://api.cloudinary.com/v1_1/'+cloudName+'/image/upload'
		const timestamp = Date.now()/1000
		const uploadPreset = 'thqamsg3'

		const paramsStr='timestamp='+timestamp+'&upload_preset='+
			uploadPreset+'8KGahH0m38JEXjNAogl7DxaF2Ig'

		const signature = sha1(paramsStr)

		const params = {
			'api_key': '322783462597546',
			'timestamp': timestamp,
			'upload_preset': uploadPreset,
			'signature': signature
		}

		let uploadRequest = superagent.post(url)
		uploadRequest.attach('file', image)

		Object.keys(params).forEach((key) => {
			uploadRequest.field(key, params[key])	
		})
		uploadRequest.end((err, resp) => {
			if(err){
				alert(err)
			}

			const uploaded = resp.body
			let images = Object.assign([], this.state.images)
			images.push(uploaded)
			this.setState({
				images: images
			})
		})
	}

	removeImage(event){
		event.preventDefault()

		let uploadedImages = Object.assign([], this.state.images)
		uploadedImages.splice(event.target.id, 1)
		this.setState({
			images: uploadedImages
		})
	}
	render(){
		const list = this.state.images.map((image, i) =>{
			return (
				<li key={i}>
					<img style={{width:72}} src={image.secure_url} /><br/>
					<a id={i} onClick={this.removeImage.bind(this)} href="#">Remove</a>
				</li>
			)
		})
		return(
			<div>
				Images Component
				<Dropzone onDrop={this.uploadFile.bind(this)} />
				<ol>
					{list}
				</ol>
			</div>
		)
	}
}

export default Images