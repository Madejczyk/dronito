var express = require('express')
var router = express.Router()

router.get('/:action', (req, res, next) => {
	var action = req.params.action

	if (action == 'send'){
			res.json({
		confirmation: 'success',
		action: action
		})
		return		
	}
	res.json({
		confirmation: 'fail',
		message: 'Invalid action'
	})
})

module.exports = router