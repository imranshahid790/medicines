var mongoose = require('mongoose');
  var Schema = mongoose.Schema;

  

  var MedicineName = new Schema({
 
    medicineName : String,
    companyName: String,
    batchNo: String,
    price: String,
    expDate: String,
    
  });

  
  var medicine = mongoose.model('MedicineName', MedicineName );
  module.exports = medicine;