import React, { Component } from 'react';
import openSocket from 'socket.io-client';
import Cookies from 'universal-cookie'
import Header from './chat-room-components/Header'
import MessageBoard from './chat-room-components/MessageBoard';
import ChatEntry from './chat-room-components/ChatEntry';
import UserLogIn from './chat-room-components/UserLogIn';

class ChatRoom extends Component {
  constructor(props) {
    super(props);
    this.socket = openSocket("http://localhost:3001");
    this.cookies = new Cookies();
    this.state = {
      isUserSignedIn: false,
    };
  }

  componentWillMount() {
    if (this.cookies.get("dailyLogIn")) {
      this.setState({
        isUserSignedIn: true,
      });
    }
  }

  render() {
    let chatRoomContents = null;
    if (this.state.isUserSignedIn) {
      chatRoomContents = <MessageBoard chatServer={this.socket} />;
    }
    else {
      chatRoomContents = <UserLogIn />;
    }

    return (
        <div id="chat-room">
            <script src="/socket.io/socket.io.js"></script>
            <Header />
            {chatRoomContents}
            <ChatEntry chatServer={this.socket}/>
        </div>
    );
  }
}

export default ChatRoom