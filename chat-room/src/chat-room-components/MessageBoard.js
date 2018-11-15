import React, { Component } from 'react';
import Message from './Message';

class MessageBoard extends Component {
  constructor(props) {
    super(props);
    this.chatServer = props.chatServer;
    this.maxMessages = 100;
    this.chatServer.on('message', this.addMessage.bind(this));
    this.chatServer.on('userEnteredServer', this.addMessage.bind(this));
    this.state = { messages: [] };
  }

  addMessage(message) {
    if (this.state.messages.length >= this.maxMessages) {
      this.removeMessage(0);
    }
    this.setState(prevState => ({
      messages: [...prevState.messages, message]
    }));
  }

  removeMessage(index) {
    this.setState((prevState) => ({
      messages: prevState.messages.filter((_, i) => i !== index)
    }));
  }

  getMessageComponents() {
    let messageComponents = [];
    this.state.messages.forEach(function(messageObject){
      messageComponents.push(<Message messageObject={ messageObject } key={ messageObject.timeStamp } />);
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