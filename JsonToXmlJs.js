//var body = context.targetRequest.body;
//var obj = context.targetRequest.body.asJSON;
//var str = JSON.stringify(obj);
var body = response.content.asJSON;
context.setVariable("response", body.response);
//print(body.Add.target);
var v1 = context.getVariable('response');
print(v1);
