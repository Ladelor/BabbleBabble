import React, { Component } from 'react';

//Component for message in chatroom message board
class Message extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.messageText = props.messageObject.messageText;
    this.sender = props.messageObject.sender;
    this.textColor = props.messageObject.textColor;
    console.log(props.messageObject);
  }

  //Renders Message
  render() {
    return (
        <li style={{ color: this.textColor }} className="message">{this.sender}: {this.messageText}</li>
    );
  }
}

export default Message