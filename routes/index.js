var express = require('express')
var router = express.Router()

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Dronito' })
})

router.get('/login', (req, res, next) => {
  res.render('login', { title: 'Login' })
})

router.get('/createalert', (req, res, next) => {
  res.render('createalert', { title: 'Create alert' })
})

router.get('/createcomment', (req, res, next) => {
  res.render('createcomment', { title: 'Create comment' })
})

router.get('/createdrone', (req, res, next) => {
  res.render('createdrone', { title: 'Create drone' })
})

router.get('/createflight', (req, res, next) => {
  res.render('createflight', { title: 'Create flight' })
})

router.get('/createprofile', (req, res, next) => {
  res.render('createprofile', { title: 'Create profile' })
})

router.get('/createzone', (req, res, next) => {
  res.render('createzone', { title: 'Create zone' })
})

module.exports = router
