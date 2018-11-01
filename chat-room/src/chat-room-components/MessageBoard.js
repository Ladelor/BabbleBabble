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
    console.log(this);
    this.setState(prevState => ({
      messages: [...prevState.messages, message]
    }));
    console.log(this.state);
  }

  getCommentComponents() {
    let comments = [];
    this.state.messages.forEach(function(message){
      comments.push(
      <li className="comment">
        <Message messageText={ message } />
      </li>);
    });
    return comments;
  }

  render() {
    let comments = this.getCommentComponents();
    return (
        <ul className="comment-container">
          { comments }
        </ul>
    );
  }
}

export default MessageBoard