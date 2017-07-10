var Profile = require('../models/Profile')
var Promise = require('bluebird')

module.exports = {
	get: (params, isRaw) => {
		return new Promise((resolve, reject) =>{
			Profile.find(params, (err, profiles) =>{
				if(err){
					reject(err)
					return
				}

				if (isRaw)
					resolve(profiles)
				else{
					var list = []
					profiles.forEach((profile,i) => {
						list.push(profile.summary())
					})
					resolve(list)
				}
			})
		})
	},

	getById: (id, isRaw) => {
		return new Promise((resolve, reject) =>{
			Profile.findById(id, (err, profile) =>{
				if(err){
					reject(err)
					return
				}
				
				if (isRaw)
					resolve(profile)
				else
					resolve(profile.summary())
			})
		})
	},

	post: (params, isRaw) => {
		return new Promise((resolve, reject) =>{
			Profile.create(params, (err, profile) =>{
				if(err){
					reject(err)
					return
				}

				if (isRaw)
					resolve(profile)
				else
					resolve(profile.summary())
			})
		})	
	}
}