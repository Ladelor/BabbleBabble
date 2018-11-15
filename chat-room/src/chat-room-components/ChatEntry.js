import React, { Component } from 'react';

class ChatEntry extends Component {
  constructor(props){
    super(props);
    this.chatServer = props.chatServer;
    this.username = props.username;
    this.textColor = props.textColor;
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.chatInput.value === "") {
      return;
    }
    this.chatServer.emit('message', { 'message': this.chatInput.value, 'username': this.username, 'textColor': this.textColor } );
    this.chatInput.value = "";
  }

  render() {
    return (
        <form id="chat-entry" onSubmit={this.handleSubmit}>
          <input type="text" name="chat-input" ref={ref => this.chatInput = ref}></input>
          <input type="submit" value="Submit"></input>
        </form>
    );
  }
}

export default ChatEntry