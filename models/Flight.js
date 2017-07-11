var mongoose = require('mongoose')

var FlightSchema = new mongoose.Schema({
	profile: {type:mongoose.Schema.Types.Mixed, default:{}},
	name: {type:String, trim: true, default:''},
	image: {type:String, default:''},
	timestamp: {type:Date, default: Date.now}
})

FlightSchema.methods.summary = function(){
	var summary = {
		profile: this.profile,
		name: this.name,
		image: this.image,
		timestamp: this.timestamp,
		id: this._id.toString()
	}
	return summary
}

module.exports = mongoose.model('FlightSchema', FlightSchema)