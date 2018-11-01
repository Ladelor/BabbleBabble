import React, { Component } from 'react';
import openSocket from 'socket.io-client';
import Header from './chat-room-components/Header'
import MessageBoard from './chat-room-components/MessageBoard';
import ChatEntry from './chat-room-components/ChatEntry';

class ChatRoom extends Component {
  constructor(props) {
    super(props);
    this.socket = openSocket("http://localhost:3001");
  }

  render() {
    return (
        <div id="chat-room">
            <script src="https://code.jquery.com/jquery-1.11.1.js"></script>
            <script src="/socket.io/socket.io.js"></script>
            <Header />
            <MessageBoard chatServer={this.socket} />
            <ChatEntry chatServer={this.socket}/>
        </div>
    );
  }
}

export default ChatRoom