import React, { Component } from 'react';
import openSocket from 'socket.io-client';
import Cookies from 'universal-cookie'
import Header from './chat-room-components/Header'
import MessageBoard from './chat-room-components/MessageBoard';
import ChatEntry from './chat-room-components/ChatEntry';
import UserLogin from './chat-room-components/UserLogin';

class ChatRoom extends Component {
  constructor(props) {
    super(props);
    this.socket = openSocket("http://localhost:3001");
    this.cookies = new Cookies();
    this.dailyLogInCookie = "dailyLogIn";
    this.state = {
      isUserSignedIn: false,
    };
  }

  componentWillMount() {
    if (this.cookies.get(this.dailyLogInCookie)) {
      this.setState({
        isUserSignedIn: true,
      });
    }
  }

  getChatRoomContents() {
    if (this.state.isUserSignedIn) {
      return  (
          <div>
            <MessageBoard chatServer={this.socket} />
            <ChatEntry chatServer={this.socket} />
          </div>
        );
    }
    else {
      return <UserLogin chatServer={this.socket} dailyLogInCookie={this.dailyLogInCookie} />;
    }
  }

  render() {
    let chatRoomContents = this.getChatRoomContents();

    return (
        <div id="chat-room">
            <script src="/socket.io/socket.io.js" />
            <Header />
            { chatRoomContents }
        </div>
    );
  }
}

export default ChatRoom