const http = require('http');

const hostname = '127.0.0.1';
const port = 3001;

var io = require('socket.io')(http);

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

io.on('connection', function(socket){
    console.log('a user connected');
    socket.on('message', function(message) {
        console.log(message);
    })
  });