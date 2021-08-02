const mongoos = require("mongoose");

const Post = new mongoos.Schema({
 "title":{
     type:String,
     required:true
    },
 "description":{
    type:String,
    required:true
   },
 "mediapath":{
    type:String,
    required:true
   },
 "privacylvl":{
    type:Number,
    required:true
   },
 "postdate":{
    type:Date,
    default: Date.now
   },

});

module.exports = mongoos.model("Posts",Post);