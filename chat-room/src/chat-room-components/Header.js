import React, { Component } from 'react';
import Clock from './Clock';

class Header extends Component {
  render() {
    return (
        <div id="header">
          <h1 className="chatroom-title">BabbleBabble Chatroom</h1>
          <Clock />
        </div>
    );
  }
}

export default Header