var express = require('express');
var app = express();
var dotenv = require('dotenv');
const MongoClient = require("mongodb").MongoClient;
const mongodb = require("mongodb");
var UsersService = require('./UsersService.js');
var OrderMasterService = require('./OrderMasterService');
var cors = require('cors');

app.use(express.json());
app.use(cors());
dotenv.config();

MongoClient.connect(process.env.CONNECTIONSTRING, { useNewUrlParser: true }, async function(error, client) {
  if (error) {
    return console.log(`Connection failed for some reason = ${error}`);
  }
  console.log("Connection established - All well");
  const db = client.db();
  //const result  = await db.collection("cars").find().toArray();
  const cars = db.collection("cars");
 //  await cars.insertOne({ carname: 'mercidies',hp: '300', model: '2019'});
  await cars.updateOne({_id:mongodb.ObjectId("6102865fcd78f4853c07f970")},{$set:{ carname: 'Audi',hp: '350', model: '2010'}});
 
});

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   console.log("Example app listening at http://%s:%s", host, port)
})

app.get('/list', function (req, res) {
 var tsd = new UsersService();
  res.end(tsd.GetAllUsers());
})

app.get('/GetAllOrders', function (req, res) {
   var oms = new OrderMasterService();
    res.end(oms.GetAllOrders());
  })

  app.get('/GetAllOrdersByUserId/:id', function (req, res) {
   var oms = new OrderMasterService();
   var Id = +req.params.id;
    res.end(oms.GetAllOrdersByUserId(Id));
  })

  app.get('/GetOrdersCount',function(req,res) {
    var oms = new OrderMasterService();
    const counts = oms.GetOrdersCount();
    res.end(counts);
   
  })
  
  
app.post('/addUser', function (req, res) {
   var tsd = new UsersService();
   res.end(tsd.SaveUser(req.body));
})


