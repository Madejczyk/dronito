var Drone = require('../models/Drone')
var Promise = require('bluebird')

module.exports = {
	get: (params, isRaw) => {
		return new Promise((resolve, reject) => {
			Drone.find(params, (err, drones) => {
				if(err){
					reject(err)
					return
				}

				if (isRaw)
					resolve(drones)
				else{
					var list = []
					drones.forEach((drone,i) => {
						list.push(drone.summary())
					})
					resolve(list)
				}
			})
		})
	},

	getById: (id, isRaw) => {
		return new Promise((resolve, reject) => {
			Drone.findById(id, (err, drone) => {
				if(err){
					reject(err)
					return
				}
				
				if (isRaw)
					resolve(drone)
				else
					resolve(drone.summary())
			})
		})
	},

	post: (params, isRaw) => {
		return new Promise((resolve, reject) => {
			Drone.create(params, (err, drone) => {
				if(err){
					reject(err)
					return
				}

				if (isRaw)
					resolve(drone)
				else
					resolve(drone.summary())
			})
		})	
	}
}