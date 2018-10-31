var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
  res.send('<h1>This is the BabbleBabble Chat Room server</h1>');
});

io.on('connection', function(socket){
    console.log('a user connected');
    socket.on('message', function(message) {
        console.log(message);
    })
  });