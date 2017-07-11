var Alert = require('../models/Alert')
var Promise = require('bluebird')

module.exports = {
	get: (params, isRaw) => {
		return new Promise((resolve, reject) => {
			Alert.find(params, (err, alerts) => {
				if(err){
					reject(err)
					return
				}

				if (isRaw)
					resolve(alerts)
				else{
					var list = []
					alerts.forEach((ale,i) => {
						list.push(ale.summary())
					})
					resolve(list)
				}
			})
		})
	},

	getById: (id, isRaw) => {
		return new Promise((resolve, reject) => {
			Alert.findById(id, (err, ale) => {
				if(err){
					reject(err)
					return
				}
				
				if (isRaw)
					resolve(ale)
				else
					resolve(ale.summary())
			})
		})
	},

	post: (params, isRaw) => {
		return new Promise((resolve, reject) => {
			Alert.create(params, (err, ale) => {
				if(err){
					reject(err)
					return
				}

				if (isRaw)
					resolve(ale)
				else
					resolve(ale.summary())
			})
		})	
	}
}