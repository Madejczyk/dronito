import superagent from 'superagent'
import Promise from 'bluebird'

export default{
	get: (url, params) => {
		return new Promise((resolve, reject) => {
			superagent
			.get(url)
			.query(params)
			.set('Accept', 'application/json')
			.end((err, response) =>{
				if(err){
					reject(err)
					return
				}

				resolve(response.body)
			})
		})	
	},
	
	/*get:(url, params, callback) => {
		superagent
		.get(url)
		.query(params)
		.set('Accept', 'application/json')
		.end((err,response) => {
			if(err){
				callback(err, null)
				return
			}
			
			const confirmation = response.body.confirmation
			if (confirmation != 'success'){
				callback({message: response.body.message}, null)
				return
			}

			callback(null, response.body)
		})
	},

	post:(url, body, callback) =>{
		superagent
		.post(url)
		.send(body)
		.set('Accept', 'application/json')
		.end((err, response) => {
			if(err){
				callback(err, null)
				return
			}

			const confirmation = response.body.confirmation
			if (confirmation != 'success'){
				callback({message: response.body.message}, null)
				return
			}

			callback(null, response.body)
		})
	},*/

	put: () => {

	},

	detele: () => {

	}
}