import React, { Component } from 'react';
import Message from './Message';

class MessageBoard extends Component {
  constructor(props){
    super(props);
    this.chatServer = props.chatServer;
    this.chatServer.on('message', this.addMessage.bind(this));
    this.state = { messages: [] };
  }

  addMessage(message){
    this.setState(prevState => ({
      messages: [...prevState.messages, message]
    }));
  }

  getMessageComponents() {
    let messageComponents = [];
    this.state.messages.forEach(function(message){
      messageComponents.push(<Message messageText={ message } />);
    });
    return messageComponents;
  }

  componentDidUpdate() {
    this.messageList.scrollTop = this.messageList.scrollHeight;
  }

  render() {
    let messageComponents = this.getMessageComponents();

    return (
        <ul id="message-container" ref={ref => this.messageList = ref}>
          { messageComponents }
        </ul>
    );
  }
}

export default MessageBoard