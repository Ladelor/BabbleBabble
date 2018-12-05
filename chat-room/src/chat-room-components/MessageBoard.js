import React, { Component } from 'react';
import Message from './Message';

//Component for MessageBoard in chatroom
class MessageBoard extends Component {
  constructor(props) {
    super(props);
    this.chatServer = props.chatServer;
    this.maxMessages = 100;
    this.chatServer.on('message', this.addMessage.bind(this));
    this.chatServer.on('userEnteredServer', this.addMessage.bind(this));
    this.state = { messages: [] };
  }

  //Adds a message to board, fired when 'message' event is emited from server
  //Params: object: message
  addMessage(message) {
    if (this.state.messages.length >= this.maxMessages) {
      this.removeMessage(0);
    }
    this.setState(prevState => ({
      messages: [...prevState.messages, message]
    }));
  }

  //Removes message object from board at location index (0 is oldest message)
  //Params: int: index
  removeMessage(index) {
    this.setState((prevState) => ({
      messages: prevState.messages.filter((_, i) => i !== index)
    }));
  }

  //Getter for message components created from message objects
  //Returns array of components created
  getMessageComponents() {
    let messageComponents = [];
    this.state.messages.forEach(function(messageObject){
      messageComponents.push(<Message messageObject={ messageObject } key={ messageObject.timeStamp } />);
    });

    return messageComponents;
  }

  //Overrides update event to keep chatroom at the bottom when a new message is sent
  componentDidUpdate() {
    this.messageList.scrollTop = this.messageList.scrollHeight;
  }

  //Renders message board
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