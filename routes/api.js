var express = require('express')
var router = express.Router()
var controllers = require('../controllers')

router.get('/:resource',(req, res, next) => {
	var resource = req.params.resource
	var controller = controllers[resource]

	if(controller == null){
		res.json({
		confirmation:'fail',
		message: 'Invalid resource request ' + resource
		})
		return
	}

	controller.get(req.query, false)
	.then((results) => {
		res.json({
			confirmation: 'success',
			results: results
		})
	})
	.catch((err) => {
		res.json({
		confirmation:'fail',
		message: err
		})
	})
})

router.get('/:resource/:id',(req, res, next) =>{
	var resource = req.params.resource
	var controller = controllers[resource]

	if(controller == null){
		res.json({
		confirmation:'fail',
		message: 'Invalid resource request ' + resource
		})
		return
	}
	
	controller.getById(req.params.id, false)
	.then((result) => {
		res.json({
			confirmation: 'success',
			results: result
		})
	})
	.catch((err) => {
		res.json({
		confirmation:'fail',
		message: resource+' '+req.params.id+' not found'
		})
	})
})

router.post('/:resource',(req, res, next) => {
	var resource = req.params.resource
	var controller = controllers[resource]

	if(controller == null){
		res.json({
		confirmation:'fail',
		message: 'Invalid resource request ' + resource
		})
		return
	}

	controller.post(req.body, false)
	.then((result) => {
		res.json({
			confirmation: 'success',
			results: result
		})
	})
	.catch((err) => {
		res.json({
		confirmation:'fail',
		message: err
		})
	})
})

module.exports = router