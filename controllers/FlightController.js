var Flight = require('../models/Flight')
var Promise = require('bluebird')

module.exports = {
	get: (params, isRaw) => {
		return new Promise((resolve, reject) =>{
			Flight.find(params, (err, flights) =>{
				if(err){
					reject(err)
					return
				}

				if (isRaw)
					resolve(flights)
				else{
					var list = []
					flights.forEach((flight,i) => {
						list.push(flight.summary())
					})
					resolve(list)
				}
			})
		})
	},

	getById: (id, isRaw) => {
		return new Promise((resolve, reject) =>{
			Flight.findById(id, (err, flight) =>{
				if(err){
					reject(err)
					return
				}
				
				if (isRaw)
					resolve(flight)
				else
					resolve(flight.summary())
			})
		})
	},

	post: (params, isRaw) => {
		return new Promise((resolve, reject) =>{
			Flight.create(params, (err, flight) =>{
				if(err){
					reject(err)
					return
				}
				
				if (isRaw)
					resolve(flight)
				else
					resolve(flight.summary())
			})
		})	
	}
}