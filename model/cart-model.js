var mongoose = require('mongoose');
  var Schema = mongoose.Schema;

  

  var cartA = new Schema({
    
    medicineName: { type: Array, required: true },
    companyName: { type: Array, required: true },
    batchNo: { type: Array, required: true },
    price: { type: Array, required: true },
    batchNo: { type: Array, required: true },
    expDate: { type: Array, required: true },
    quantity: { type: Array, required: true },
    
   
  });

  
  var cart = mongoose.model('cart', cartA );
  module.exports = cart;