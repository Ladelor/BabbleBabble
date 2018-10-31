import React, { Component } from 'react';

class Message extends Component {
  render() {
    return (
        <p>{this.props.test}</p>
    );
  }
}

export default Message