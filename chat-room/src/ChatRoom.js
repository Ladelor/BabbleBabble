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
      username: "",
      textColor: '#000000',
    };
  }

  componentWillMount() {
    if (this.cookies.get(this.dailyLogInCookie)) {
      this.setState({
        isUserSignedIn: true,
        username: this.cookies.get(this.dailyLogInCookie),
      });
    }
  }

  getChatRoomContents() {
    if (this.state.isUserSignedIn) {
      return  (
          <div>
            <MessageBoard chatServer={this.socket} />
            <ChatEntry chatServer={this.socket} username={this.state.username} textColor={this.state.textColor} />
          </div>
        );
    }
    else {
      return <UserLogin chatServer={this.socket} dailyLoginCookie={this.dailyLogInCookie} loginFunction={this.userLoggedIn}/>;
    }
  }

  userLoggedIn = (username, colorSelected) => {
    this.setState({
      isUserSignedIn: true,
      username: username,
      textColor: colorSelected,
    });
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