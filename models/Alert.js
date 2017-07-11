var mongoose = require('mongoose')

var AlertSchema = new mongoose.Schema({
	position: {
		lat: {type: Number, default:0},
		lng: {type: Number, default:0}
	},
	key: {type: String, trim: true, default:''},
	defaultAnimation: {type: Number, default:2},
	timestamp: {type:Date, default:Date.now}
})

AlertSchema.methods.summary = function(){
	var summary = {
		position: this.position,
		key: this.key,
		defaultAnimation: this.defaultAnimation,
		timestamp: this.timestamp,
		id: this._id.toString()
	}
	return summary
}

module.exports = mongoose.model('AlertSchema', AlertSchema)