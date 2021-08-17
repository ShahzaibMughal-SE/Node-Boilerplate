const OrderMasterService = require('./OrderMasterService');

class UsersService {
  
 user = [
        {
           "name" : "shahzaib",
           "counter" : 1,
           "id": 1
        },
        {
         "name" : "saad",
         "counter" : 2,
         "id": 2
       },
       {
         "name" : "shayan",
         "counter" : 3,
         "id": 3
       },
       {
         "name" : "Ibrahim",
         "counter" :4 ,
         "id": 4
       },
       {
         "name" : "bilal",
         "counter" : 5,
         "id": 5
       },
       {
         "name" : "Razzi",
         "counter" : 6,
         "id": 6
       },
     ];

 GetAllUsers() {

   debugger;
  var oms = new OrderMasterService();
  let countdata =   oms.GetOrdersCount();
  var ResponseList =[];
  console.log(oms.GetOrdersCount().length);
  for(var i =0; i<Object.keys(countdata).length;i++){
    var ResponseObj ={};
    ResponseObj.Userdto = this.user.filter(x => x.userId === countdata[i].uid);
    ResponseObj.count = countdata[i].count;
    ResponseList.push(ResponseObj);
    }
    return JSON.stringify(ResponseList);
 }
 
SaveUser(body){
   let usr ={
      "name" : body.name,
      "password" : body.password,
      "profession" : body.profession,
      "id": body.id
   }
   this.user.push(usr);
   return JSON.stringify(this.user);
 }
}

module.exports = UsersService;