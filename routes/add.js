 const express  = require('express');
const router = express.Router();

router.get('/',(req,res)=>{
    res.end("inside add ");
})

module.exports = router; 