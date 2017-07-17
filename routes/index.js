var express = require('express')
var router = express.Router()

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Dronito' })
})

router.get('/email', isAuthenticated, (req, res, next) => {
  res.render('email', { title: 'Template email', currertDate:"7.07.2017", currentTime:"20:10", latPosition:40.714728, lngPosition:-73.998672})
})


router.get('/login', (req, res, next) => {
  res.render('login', { title: 'Login' })
})

router.get('/createalert', isAuthenticated, (req, res, next) => {
  res.render('createalert', { title: 'Create alert' })
})

router.get('/createcomment', isAuthenticated, (req, res, next) => {
  res.render('createcomment', { title: 'Create comment' })
})

router.get('/createdrone', isAuthenticated, (req, res, next) => {
  res.render('createdrone', { title: 'Create drone' })
})

router.get('/createflight', isAuthenticated, (req, res, next) => {
  res.render('createflight', { title: 'Create flight' })
})

router.get('/createprofile', isAuthenticated, (req, res, next) => {
  res.render('createprofile', { title: 'Create profile' })
})

router.get('/createzone', isAuthenticated, (req, res, next) => {
  res.render('createzone', { title: 'Create zone' })
})

router.get('/dashboard', isAuthenticated, (req, res, next) => {
  res.render('dashboard', { title: 'Create zone' })
})

function isAuthenticated(req, res, next) {
  if (req.isAuthenticated())
    return next()
  res.redirect('/')
}

module.exports = router
