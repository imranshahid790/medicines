var express = require('express')
var MedicineService = require('../service/medicine-service')
var router = express.Router()

router.use(function timeLog (req, res, next) {
    console.log('Time: ', Date.now())
    next()
  })
router.post('/', function (req, res) 
{
    console.log('Inside Controller Medicine Save Method')
    MedicineService.save(req, res).then((err,data)=>
     {
        if(err) console.log(err)
        res.send(data)
        })
});
//Medicine get Method
router.get('/:id', function (req, res) {
  console.log('Inside Controller Medicine get Method')
  MedicineService.getById(req, res).then((err,data)=> 
  {
      if(err) console.log(err)
      res.send(data)
   
      })
});

module.exports = router