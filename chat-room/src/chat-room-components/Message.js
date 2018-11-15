import React, { Component } from 'react';

class Message extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.messageText = props.messageObject.messageText;
    this.sender = props.messageObject.sender;
    this.textColor = props.messageObject.textColor;
    console.log(props.messageObject);
  }

  render() {
    return (
        <li style={{ color: this.textColor }} className="message">{this.sender}: {this.messageText}</li>
    );
  }
}

export default Message