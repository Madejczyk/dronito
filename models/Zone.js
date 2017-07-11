var mongoose = require('mongoose')

var ZoneSchema = new mongoose.Schema({
	name: {type:String, trim: true, default:''},
	zipCodes: {type:Array, default:[]},
	//location: {type:[Number]},
	timeStamp: {type:Date, default:Date.now}
})

module.exports = mongoose.model('ZoneSchema', ZoneSchema)