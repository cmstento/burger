require('method-override')
var bodyParser = require('body-parser')
var model = require ('./models/burger.js')
var expressHandlebars = require ('express-handlebars')
var routes = require('./controllers/burger_controller.js')

var express = require('express')
var app = express()
var handlebars = expressHandlebars.create({})

app.engine('handlebars', handlebars.engine)
app.set('view engine', 'handlebars')

app.use(bodyParser.urlencoded({ extended: true }))
app.use('/api', routes)

app.get('/', function (req, res, next){
    model.selectAllBurgers().then(function (results) {
        res.render('index', {burgers: results})
    })
})

app.get('/burgers', function(req, res, next){
    model.selectAllBurgers().then(function (results) {
        res.render('layouts/burgerslist', {burgers: results})
    })
})

app.listen(80)
