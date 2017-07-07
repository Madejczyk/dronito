var express = require('express')
var router = express.Router()

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Dronito' })
})

router.get('/createzone', (req, res, next) => {
  res.render('createzone', { title: 'Create zone' })
})

router.get('/createcomment', (req, res, next) => {
  res.render('createcomment', { title: 'Create comment' })
})

module.exports = router
