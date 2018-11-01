const io = require('socket.io')();

io.on('connection', function(socket){
  console.log('a user connected');
  socket.on('message', function(message) {
    io.emit('message', getMessageObject(message));
  })
});

function getMessageObject(message) {
  let curDate = new Date();
  return { "message": message, "timeStamp": curDate.getTime() };
}

const port = 3001;
io.listen(port, () => {
  console.log('Server running at http://${hostname}:${port}/');
});