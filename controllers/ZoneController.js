var Zone = require('../models/Zone')
var Promise = require('bluebird')

module.exports = {
	get: (params, isRaw) => {
		return new Promise((resolve, reject) =>{
			Zone.find(params, (err, zones) =>{
				if(err){
					reject(err)
					return
				}
				resolve(zones)
			})
		})
	},

	getById: (id, isRaw) => {
		return new Promise((resolve, reject) =>{
			Zone.findById(id, (err, zone) =>{
				if(err){
					reject(err)
					return
				}
				resolve(zone)
			})
		})
	},

	post: (params, isRaw) => {
		return new Promise((resolve, reject) =>{
			Zone.create(params, (err, zone) =>{
				if(err){
					reject(err)
					return
				}
				resolve(zone)
			})
		})	
	}
}