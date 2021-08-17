const mongoos = require("mongoose");

const User =  mongoos.Schema({

"userName":{
    type:String,
    required:true
},
"emailAddress":{
    type:String,
    required:true,      
},
"password":{
  type: String,
  required:true,
}
});
module.exports = mongoos.model("User",User); ;
