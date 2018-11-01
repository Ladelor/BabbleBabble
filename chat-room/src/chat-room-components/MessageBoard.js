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

  componentDidUpdate() {
    this.myCommentList.scrollTop = this.myCommentList.scrollHeight;
  }

  scrollToBottomOfCotainer() {
    var element = document.getElementById("comment-container");
    element.scrollTop = element.scrollHeight;
  }

  render() {
    let comments = this.getCommentComponents();

    return (
        <ul id="comment-container" ref={ref => this.myCommentList = ref}>
          { comments }
        </ul>
    );
  }
}

export default MessageBoard