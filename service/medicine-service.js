
var medicine = require('../model/medicine-model');
const mongoose = require('mongoose');
module.exports.save = function (req, res) 
{
    return new Promise((resolve,reject)=>{
    
        //var AddMedicine = new medicine();
        var AddMedicine = new medicine({
            medicineName: req.body.medicineName,
            companyName : req.body.companyName,
            batchNo : req.body.batchNo,
            price : req.body.price,
            expDate : req.body.expDate
         });
        // AddMedicine.medicineName = req.body.medicineName;
        // AddMedicine.companyName = req.body.companyName;
        // AddMedicine.batchNo = req.body.batchNo;
        // AddMedicine.price = req.body.price;
        // AddMedicine.expDate = req.body.expDate;

        AddMedicine.save(function (err, data)
         {
            if (err) console.log(err)
            res.send ({
                'success':"200",
                'message':"Saved",
                'result':data
            })
            
          });
    });

}
//service get by id 
module.exports.getById = function (req, res) {
    return new Promise((resolve,reject)=>{
        var query = {medicineName:req.params.id}
        medicine.find(query,(err, data) =>
        {
            if (err) console.log(err)
            res.send ({
                'success':"200",
                'message':"Get By ID",
                'result':data
            })
          });

    });

}

