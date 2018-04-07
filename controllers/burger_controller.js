var burger_model = require ('../models/burger.js')

var express = require('express')
var routes = express.Router()

routes.get ('/burgers', function (req, res) {
    burger_model.selectAllBurgers().then(function (results) {
        res.send(results)
    })
})

routes.post ('/burgers', function(req, res)  {
    var burger = req.body
    console.log(burger)
    burger_model.insertBurger(burger).then(function (results) {
        res.send(results)
    })
})

routes.put ('/burgers', function(req, res) {
    var burger = req.body
    burger_model.updateOneBurger(burger).then(function (results) {
        res.send(results)
    })
})

module.exports = routes