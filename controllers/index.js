var AlertController = require('./AlertController')
var CommentController = require('./CommentController')
var DroneController = require('./DroneController')
var FlightController = require('./FlightController')
var ProfileController = require('./ProfileController')
var ZoneController = require('./ZoneController')

module.exports = {
	alert: AlertController,
	comment: CommentController,
	drone: DroneController,
	flight: FlightController,
	profile: ProfileController,
	zone: ZoneController
}