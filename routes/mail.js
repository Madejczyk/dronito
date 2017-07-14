var express = require('express')
var router = express.Router()
var helper = require('sendgrid').mail

router.post('/:action', (req, res, next) => {
	var action = req.params.action

	if (action == 'send'){
		var from_email = new helper.Email(req.body.sender)
		var to_email = new helper.Email(process.env.SENDGRID_FROM_EMAIL)
		var subject = 'Contact from Dronito platform. Name:'+ req.body.name
		var content = new helper.Content('text/html', req.body.message)
		var mail = new helper.Mail(from_email, subject, to_email, content)

		var sg = require('sendgrid')(process.env.SENDGRID_API_KEY)
		var request = sg.emptyRequest({
		  method: 'POST',
		  path: '/v3/mail/send',
		  body: mail.toJSON(),
		})

		sg.API(request, function(error, response) {
			if (error){
					res.json({
					confirmation: 'fail',
					message: error
				})
				return
			}

		  	res.render('index', { title: 'Dronito' })
			/*res.json({
				confirmation: 'success',
				message: response
			})*/
		})
		return
	}

	res.json({
		confirmation: 'fail',
		message: 'Invalid action'
	})
})

module.exports = router