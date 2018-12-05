import React, { Component } from 'react';
import openSocket from 'socket.io-client';
import Cookies from 'universal-cookie'
import Header from './chat-room-components/Header'
import MessageBoard from './chat-room-components/MessageBoard';
import ChatEntry from './chat-room-components/ChatEntry';
import UserLogin from './chat-room-components/UserLogin';

//Component for the whole chatroom
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

  //Overrides event for when chatroom is about to be added to page
  //Uses daily cookie to determine if login or message board should be displayed
  componentWillMount() {
    if (this.cookies.get(this.dailyLogInCookie)) {
      this.setState({
        isUserSignedIn: true,
        username: this.cookies.get(this.dailyLogInCookie),
      });
    }
  }

  //Gets chatroom components based on if user is logged in
  //Returns either MessageBoard and ChatEntry or UserLogin
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

  //Function given to login component to get information from succesful login attempt
  //Params: string: username, string: colorSelected
  userLoggedIn = (username, colorSelected) => {
    this.setState({
      isUserSignedIn: true,
      username: username,
      textColor: colorSelected,
    });
  }

  //Renders Chatroom
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