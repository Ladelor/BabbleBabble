import React, { Component } from 'react';
import Clock from './Clock';

//Component for header in chatroom
class Header extends Component {
  //Renders header
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