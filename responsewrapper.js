
class ResponseWrapper{
   StatusCode;
   ErrorMessage;
   ResData;
   GetSuccessResponse(data){
    var resp = new ResponseWrapper();
    resp.StatusCode=200;
    resp.ErrorMessage='';
    resp.ResData=data;
    return resp;
   }
   GetErrorResponse(err){
    var resp = new ResponseWrapper();
    resp.StatusCode=500;
    resp.Error=err;
    resp.ResData='';
    return resp;
   }
}

module.exports = ResponseWrapper;