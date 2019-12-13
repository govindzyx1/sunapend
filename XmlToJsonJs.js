var body = response.content.asXML;
context.setVariable("response", body.response);
//print(body.Add.target);
var v1 = context.getVariable('response');
print(v1);