const ChatUsers = require('./ChatUsers');
let chatUsers = new ChatUsers.ChatUsers();
const io = require('socket.io')();

//Handler for a socket connection
io.on('connection', function(socket){
  console.log('a user connected');
  //Handler for message object
  //Emits a message to all sockets currently connected
  socket.on('message', function(messageObject) {
    io.emit('message', getMessageObject(messageObject));
  });

  //Handler for user login
  //On success, returns success and emit login to all sockets connected
  //On failure, returns failure to the socket
  socket.on('userLogin', function(loginAttempt) {
    if (chatUsers.addUser(loginAttempt)) {
      socket.emit('loginSuccess', getLoginObject(loginAttempt.username));
      io.emit('userEnteredServer', getUserEnteredSeverObject(loginAttempt.username));
      console.log('user entered chatroom: ' + loginAttempt.username);
    }
    else {
      socket.emit('loginFail', getLoginObject(loginAttempt.username));
      console.log('user failed to enter chatroom: ' + loginAttempt.username);
    }
  });
});

//Getter function for a message object from a user chat entry
//Params: object sent from user socket
//Returns anon object with message info
function getMessageObject(messageObject) {
  let curDate = new Date();
  return { 
    'messageText': messageObject.message, 
    'timeStamp': curDate.getTime(), 
    'sender': messageObject.username, 
    'textColor': messageObject.textColor 
  };
}

//Getter function for message object from server for user joined chatroom
//Params: string: username
//Returns anon object with message info
function getUserEnteredSeverObject(username) {
  let curDate = new Date();
  return { 
    'messageText': username + ' joined the chatroom', 
    'timeStamp': curDate.getTime(), 
    'sender': 'Server',
    'textColor': '#000000'
  };

}

//Getter function for login object
//Params: string: username
//Returns anon object with login info
function getLoginObject(username) {
  return { 'username': username };
}

const port = 3001;
io.listen(port, () => {
  console.log('Server running at http://${hostname}:${port}/');
});
