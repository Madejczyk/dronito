var mongoose = require('mongoose')

var DroneSchema = new mongoose.Schema({
	profile: {type:mongoose.Schema.Types.Mixed, default:{}}, //Id= {type:String, trim: true, default:''}
	model: {type:String, trim: true, default:''},
	title: {type:String, trim: true, default:''},
	description: {type:String, trim: true, default:''},
	image: {type:String, default:''},
	timestamp: {type:Date, default: Date.now}
})

DroneSchema.methods.summary = function(){
	var summary = {
		profile: this.profile,
		model: this.model,
		title: this.title,
		description: this.description,
		image: this.image,
		timestamp: this.timestamp,
		id: this._id.toString()
	}
	return summary
}

module.exports = mongoose.model('DroneSchema', DroneSchema)