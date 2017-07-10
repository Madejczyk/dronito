var ZoneController = require('./ZoneController')
var CommentController = require('./CommentController')
var DroneController = require('./DroneController')
var ProfileController = require('./ProfileController')
var FlightController = require('./FlightController')

module.exports = {
	comment: CommentController,
	zone: ZoneController,
	drone: DroneController,
	flight: FlightController,
	profile: ProfileController
}