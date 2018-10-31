var app = require('express')();
var http = require('http').Server(app);

app.get('/', function(req, res){
  res.send('<h1>This is the BabbleBabble Chat Room server</h1>');
});