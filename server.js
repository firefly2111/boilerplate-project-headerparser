var express = require("express");
var bodyParser = require("body-parser");
var app = express();
app.use(bodyParser.json());

app.get("/", function(req, res){
  res.sendFile(__dirname + "/views/index.html");
});

app.get("/api/whoami",function(req, res){
  var ip = req.ip;
  var systemInfo = req.get("User-Agent");
  var language = req.acceptsLanguages();
  res.json({ipaddress: ip, language: language, software: systemInfo});
});

app.listen(3000, function(){
  console.log("Working");
});

module.exports = app;
