var express = require('express')
var router = express.Router()
var controllers = require('../controllers')
var bcrypt = require('bcryptjs')

router.post('/login', (req, res, next) =>{
	var credentials = req.body 
	controllers.profile
	.get({email: credentials.email},true)
	.then((profiles) => {
		if(profiles.length == 0){
			res.json({
				confirmation: 'fail',
				message: 'Profile not found'
			})
			return	
		}
		
		var profile = profiles[0]

		var passwordCorrect = bcrypt.compareSync(credentials.password, profile.password)
		if (passwordCorrect == false){
			res.json({
				confirmation: 'fail',
				message: 'Incorrect password'				
			})
			return
		}

		res.json({
			confirmation: 'success',
			profile: profile.summary()
		})
	})

	.catch((err) => {
		res.json({
			confirmation: 'fail',
			message: err
		})
	})
})

module.exports = router