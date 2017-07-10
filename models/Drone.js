var mongoose = require('mongoose')

var DroneSchema = new mongoose.Schema({
	profile: {type:mongoose.Schema.Types.Mixed, default:{}},
	model: {type:String, default:''},
	kind: {type:String, default:''},
	image: {type:String, default:''},
	timestamp: {type:Date, default: Date.now}
})

DroneSchema.methods.summary = function(){
	var summary = {
		profile: this.profile,
		model: this.model,
		kind: this.kind,
		image: this.image,
		timestamp: this.timestamp,
		id: this._id.toString()
	}
	return summary
}

module.exports = mongoose.model('DroneSchema', DroneSchema)