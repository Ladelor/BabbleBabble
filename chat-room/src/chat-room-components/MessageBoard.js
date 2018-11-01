import React, { Component } from 'react';
import Message from './Message';

class MessageBoard extends Component {
  constructor(props){
    super(props);
    this.socket = props.chatServer;
    console.log(this.socket);
  }
  render() {
    return (
        <Message test="test"/>
    );
  }
}

export default MessageBoard