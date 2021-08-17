const fs = require('fs');
class OrderMasterService {

   
    GetAllOrders() {
        
        let rawdata = fs.readFileSync( __dirname + "/" + "OrderMasterData.json")
        let orders = JSON.parse(rawdata);
        return  JSON.stringify(orders);
    }
    
    GetAllOrdersByUserId(id) {
        let rawdata = fs.readFileSync( __dirname + "/" + "OrderMasterData.json")
        let orders = JSON.parse(rawdata);
        let filteredData = orders.filter(x=>x.userId === id);
        return  JSON.stringify(filteredData);
    }
    
    GetOrdersCount() {
        let rawdata = fs.readFileSync( __dirname + "/" + "OrderMasterData.json")
        var orders = JSON.parse(rawdata);
        let filteredData =[];// orders.filter(x=>x.userId === id);
        var testarray =[];
        for(var i =1;i<=6;i++){
             filteredData = orders.filter(x=>x.userId === i);
            testarray.push({
                "uid":i,
                count:Object.keys(filteredData).length
            });
        }
        return  JSON.stringify(testarray);
    }
    

   }
   
   module.exports = OrderMasterService;