const express = require('express')

const router = express.Router()

router.use(function(req,  res,  next) {
    console.log(`I'm running only on admin`)
    next()
})

router.get('/', function(req, res) {
    res.send('hello admin get')
})

//POST localhost:3000/product
router.post('/', function(req, res) {
    res.send('hello admin post')
})

module.exports = router
