import React, { Component } from 'react';
import Header from './chat-room-components/Header'
import MessageBoard from './chat-room-components/MessageBoard';
import ChatEntry from './chat-room-components/ChatEntry';

class ChatRoom extends Component {
  render() {
    return (
        <div class="chat-room">
            <script src="/socket.io/socket.io.js"></script>
            <Header />
            <MessageBoard />
            <ChatEntry />
        </div>
    );
  }
}

export default ChatRoom