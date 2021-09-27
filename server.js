const express = require('express')
const productsRouter = require('./routes/products')
const adminRouter = require('./routes/admin')
const bodyParser = require('body-parser');
const exphbs  = require('express-handlebars');
const Handlebars = require('handlebars')

const app = express()
const port = 3000
app.engine('handlebars', exphbs({ defaultLayout: false }));
app.set('view engine', 'handlebars');
app.set("views", "views");

Handlebars.registerPartial('header', '');

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

function alwaysConsole (req, res, next) {
    console.log(`I'm running always`)
    next()
}

app.use(alwaysConsole)
app.use('/products', productsRouter)
app.use('/admin', adminRouter)

app.get('/', function (req, res) {
    res.render('home', {city: "Kyiv"});
  })
  
  app.post('/', function (req, res) {
    res.send('hello world we did post')
  })
  
app.listen(port, () => console.log('Hello express on port: '),  port)
