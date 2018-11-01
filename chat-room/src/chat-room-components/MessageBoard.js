import React, { Component } from 'react';
import Message from './Message';

class MessageBoard extends Component {
  constructor(props){
    super(props);
    this.chatServer = props.chatServer;
    this.chatServer.on('message', this.addMessage.bind(this));
    //this.addMessage = this.addMessage.bind(this);
    this.state = {messages: []};

  }

  addMessage(message){
    console.log(this);
    this.setState(prevState => ({
      messages: [...prevState.messages, message]
    }))
    console.log(this.state);
  }

  render() {
    let comments = [];
    this.state.messages.forEach(function(message){
      comments.push(<Message messageText={message} />);
    })
    return (
        <div>{comments}</div>
    );
  }
}

export default MessageBoard