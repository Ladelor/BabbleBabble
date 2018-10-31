import React, { Component } from 'react';
const io = require('socket.io-client')();

class Message extends Component {
  constructor(props) {
      super(props);
      this.socket = io.connect("http://172.19.144.1:3001");
  }
  render() {
    return (
        <p>{this.props.test}</p>
    );
  }
}

export default Message