
var cart = require('../model/cart-model');
const mongoose = require('mongoose');

module.exports.save = function (req, res) 
{
    return new Promise((resolve,reject)=>{
    
        var carts =  [{
                
                medicineName :  req.body.medicineName,
                companyName : req.body.companyName,
                batchNo : req.body.batchNo,
                price : req.body.price,
                expDate : req.body.expDate,
                quantity : req.body.quantity
              }]
       
      
                cart.collection.insert(carts,{safe:true},function (err, data)
                {
                     if (err) console.log(err)
                    res.send ({
                        'success':"200",
                        'message':"Savedd",
                        'result':data
                    })
                });
            
});

}