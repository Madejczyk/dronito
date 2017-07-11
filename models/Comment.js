var mongoose = require('mongoose')

var CommentSchema = new mongoose.Schema({
	username: {type: String, trim: true, default:''},
	body: {type: String, trim: true, default:''},
	timestamp: {type:Date, default:Date.now}
})

module.exports = mongoose.model('CommentSchema', CommentSchema)