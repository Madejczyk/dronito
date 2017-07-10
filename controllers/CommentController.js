var Comment = require('../models/Comment')
var Promise = require('bluebird')

module.exports = {
	get: (params, isRaw) => {
		return new Promise((resolve, reject) => {
			Comment.find(params, (err, comments) => {
				if(err){
					reject(err)
					return
				}
				resolve(comments)
			})
		})
	},

	getById: (id, isRaw) => {
		return new Promise((resolve, reject) => {
			Comment.findById(id, (err, comment) => {
				if(err){
					reject(err)
					return
				}
				resolve(comment)
			})
		})
	},

	post: (params, isRaw) => {
		return new Promise((resolve, reject) => {
			Comment.create(params, (err, comment) => {
				if(err){
					reject(err)
					return
				}
				resolve(comment)
			})
		})	
	}
/*	get(params, callback){
		Comment.find(params,(err, comment) => {
			if (err){
				callback(err, null)
				return
			}
			callback(null, comment)			
		})
	},

	getById(id, callback){
		Comment.findById(id,(err, comment) => {
			if (err){
				callback(err, null)
				return
			}
			callback(null, comment)			
		})
	},
	create(params, callback){
		Comment.create(params,(err, comment) => {
			if (err){
				callback(err, null)
				return
			}
			callback(null, comment)	
		})
	},

	update(id, params, callback){
		Comment.findByIdAndUpdate(id, params, {new: true}, (err,comment) => {
			if (err){
				callback(err, null)
				return
			}

			callback(null, comment)
		})
	},

	delete(id, callback){
		Comment.findByIdAndRemove(id, (err) => {
			if (err){
				callback(err, null)
				return
			}

			callback(null, null)
		})
	}*/
}