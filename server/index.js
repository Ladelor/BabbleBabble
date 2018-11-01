const io = require('socket.io')();

io.on('connection', function(socket){
  console.log('a user connected');
  socket.on('message', function(message) {
    console.log(message);
  })
});

const port = 3001;
io.listen(port, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});