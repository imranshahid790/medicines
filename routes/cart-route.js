var express = require('express')
var cartService = require('../service/cart-service')
var router = express.Router()

router.use(function timeLog (req, res, next) {
    console.log('Time: ', Date.now())
    next()
  })
router.post('/', function (req, res) 
{
    console.log('Inside Controller cart Save Method')
    cartService.save(req, res).then((err,data)=>
     {
        if(err) console.log(err)
        res.send(data)
        })
});
module.exports = router