const express = require('express')
const path = require('path')
const router = express.Router()
// const  bodyParser = require('body-parser');

// app.use(bodyParser.json()); // support json encoded bodies
// app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

router.use(function(req,  res,  next) {
    console.log(`I'm running only on products`)
    next()
})

router.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '../views', 'products.html'))
})

//POST localhost:3000/product
router.post('/', function(req, res) {
    console.log('REQUEST BODY ===> ', req.body)
    res.send(req.body)
})

router.post('/json', function(req, res) {

    res.send(req.body)
})

router.get('/:id', function(req, res) {
    const id = req.params.id  
    
    res.send(`You get product with id: ${id}`)
})



module.exports = router
