const io = require('socket.io')();

io.on('connection', function(socket){
  console.log('a user connected');
  socket.on('message', function(message) {
    console.log(message);
    let curDate = new Date();
    io.emit('message', { "message": message, "timeStamp": curDate.getTime() });
  })
});

const port = 3001;
io.listen(port, () => {
  console.log('Server running at http://${hostname}:${port}/');
});