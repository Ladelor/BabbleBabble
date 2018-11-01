import React, { Component } from 'react';

class ChatEntry extends Component {
  constructor(props){
    super(props);
    this.chatServer = props.chatServer;
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.chatServer.emit('message', document.getElementById("chat-input").value);
  }

  render() {
    return (
        <form id="chat-entry" onSubmit={this.handleSubmit}>
          <input id="chat-input" type="text" name="chat-input"></input>
          <input type="submit" value="Submit"></input>
        </form>
    );
  }
}

export default ChatEntry