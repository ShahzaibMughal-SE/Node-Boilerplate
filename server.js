const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());
const mongoose = require('mongoose')
const dotenv = require("dotenv")
dotenv.config()


mongoose.connect(process.env.CONNECTIONSTRING , { useNewUrlParser : true, useUnifiedTopology : true})
.then((res)=>console.log('> Connected...'))
.catch(err=>console.log(`> Error while connecting to mongoDB : ${err.message}`))


const posts = require('./routes/posts');
const adds = require('./routes/add');

app.use("/posts",posts);
app.use("/adds",adds);




app.listen(3000);
