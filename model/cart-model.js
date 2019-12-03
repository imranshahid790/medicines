var mongoose = require('mongoose');
  var Schema = mongoose.Schema;

  

  var cartA = new Schema({
 
  
      
         medicineName:String,
        companyName: String,
        batchNo: String,
        price: String,
        expDate: String,
        quantity: String,

  });

  
  var cart = mongoose.model('cart', cartA );
  module.exports = cart;