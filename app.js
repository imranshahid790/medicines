const express = require('express')
const app = express()
var path=require('path');
var bodyParser = require("body-parser");
const port = 3000
var mongoose = require('mongoose');
var mongoDB = 'mongodb://localhost:27017/pharmacy';
mongoose.connect(mongoDB, { useNewUrlParser: true });
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
var usersRoutes = require('./routes/user-routes')
var medicineRoutes = require('./routes/medicine-routes')
var cart = require('./routes/cart-route')
app.use(bodyParser.json({limit: '50mb',type: 'application/json'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true, parameterLimit: 1000000}));
app.use('/static', express.static(path.join(__dirname, 'public')))
app.use('/users', usersRoutes)
app.use('/medicine', medicineRoutes)
app.use('/cart', cart)
app.listen(port, () => console.log(`Example app listening on port ${port}!`))



//https://flaviocopes.com/express-https-self-signed-certificate/

//https://medium.com/@nileshsingh/everything-about-creating-an-https-server-using-node-js-2fc5c48a8d4e
