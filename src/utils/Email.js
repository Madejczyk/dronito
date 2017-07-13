/*var helper = require('sendgrid').mail
var Promise = require('bluebird')

module.exports = {
	sendEmail: (emailInfo) =>{
		return new Promise((resolve, reject) => {
			var from_email = new helper.Email(emailInfo.sender)
			var to_email = new helper.Email(process.env.SENDGRID_FROM_EMAIL)
			var subject = 'Contact from Dronito platform. Name:'+ emailInfo.name
			var content = new helper.Content('text/html', emailInfo.message)
			var mail = new helper.Mail(from_email, subject, to_email, content)

			var sg = require('sendgrid')(process.env.SENDGRID_API_KEY)
			var request = sg.emptyRequest({
			  method: 'POST',
			  path: '/v3/mail/send',
			  body: mail.toJSON(),
			})

			sg.API(request, function(error, response) {
				if (error){
					reject(error)
					return
				}
			  
				resolve(response)
			})
		})

	}
}*/