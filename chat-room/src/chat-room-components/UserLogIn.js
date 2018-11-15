import React, { Component } from 'react';
import Cookies from 'universal-cookie'

class UserLogin extends Component {
  constructor(props) {
      super(props);
      this.cookies = new Cookies();
      this.chatServer = props.chatServer;
      this.dailyLoginCookie = props.dailyLoginCookie;
      this.chatServer.on('userLoginAttempt', this.userLoginAttempt.bind(this));
      this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {
    this.chatServer.emit('userLogin', this.loginInput.value);
  }

  userLoginAttempt(loginAttempt) {
    if (loginAttempt.success) {
      //TODO: create cookie, pass to up to parent, etc.
    }
  }

  render() {
    return (
      <form id="user-login" onSubmit={this.handleSubmit}>
        <input type="text" name="login-input" ref={ref => this.loginInput = ref}></input>
        <input type="submit" value="Submit"></input>
      </form>
    );
  }
}

export default UserLogin