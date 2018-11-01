import React, { Component } from 'react';

class ChatEntry extends Component {
  constructor(props){
    super(props);
    this.chatServer = props.chatServer;
  }
  render() {
    return (
        <form id="chat-entry">
          <input type="text" name="chat-input"></input>
          <input type="submit" value="Submit"></input>
        </form>
    );
  }
}

export default ChatEntry