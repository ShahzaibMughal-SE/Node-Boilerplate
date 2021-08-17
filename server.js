const express = require('express');
const cors = require('cors');
require("dotenv").config();
const app = express();
require("./config/database").connectDB();
const { APPPORT } = process.env;


//MIDDLEWARE REQUIRE BLOCK
const posts = require('./routes/posts');
const adds = require('./routes/add');
const users = require('./routes/users');
//

// SYSTEM MIDDLEWARE USEING BLOCK
app.use(cors());
app.use(express.json());
////

//APP MIDDLEWARE USE BLOCK
app.use("/posts",posts);
app.use("/adds",adds);
app.use("/users",users);
////


const Port = process.env.Port|APPPORT

app.listen(Port,(res)=>{
  console.log("listening");
});
