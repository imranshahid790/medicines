
var cart = require('../model/cart-model');
const mongoose = require('mongoose');
module.exports.save = function (req, res) 
{
    return new Promise((resolve,reject)=>{
    
        //var AddMedicine = new medicine();
        var carts = new cart({
            medicineName: req.body.medicineName,
            companyName : req.body.companyName,
            batchNo : req.body.batchNo,
            price : req.body.price,
            expDate : req.body.expDate,
            quantity : req.body.quantity
         });
         
        carts.save(function (err, data)
         {
            if (err) console.log(err)
            res.send ({
                'success':"200",
                'message':"cart saved",
                'result':data
            })
            
          });
    });

}