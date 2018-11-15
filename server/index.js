const ChatUsers = require('./ChatUsers');
let chatUsers = new ChatUsers.ChatUsers();

const io = require('socket.io')();

io.on('connection', function(socket){
  console.log('a user connected');
  socket.on('message', function(messageObject) {
    io.emit('message', getMessageObject(messageObject));
  });

  socket.on('userLogin', function(loginAttempt) {
    if (chatUsers.addUser(loginAttempt)) {
      socket.emit('loginFail', getLoginObject(loginAttempt.username));
      console.log('user failed to enter chatroom: ' + loginAttempt.username);
    }
    else {
      socket.emit('loginSuccess', getLoginObject(loginAttempt.username));
      io.emit('userLogin', getLoginObject(loginAttempt.username));
      console.log('user entered chatroom: ' + loginAttempt.username);
    }
  });
});

function getMessageObject(messageObject) {
  let curDate = new Date();
  return { 'message': messageObject.message, 'timeStamp': curDate.getTime(), 'sender': messageObject.username };
}

function getLoginObject(username) {
  return { 'username': username };
}

const port = 3001;
io.listen(port, () => {
  console.log('Server running at http://${hostname}:${port}/');
});