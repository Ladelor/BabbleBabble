import React, { Component } from 'react';
import Cookies from 'universal-cookie';
import ColorSelector from './ColorSelector'
import Utils from '../Utils'

class UserLogin extends Component {
  constructor(props) {
      super(props);
      this.cookies = new Cookies();
      this.chatServer = props.chatServer;
      this.dailyLoginCookie = props.dailyLoginCookie;
      this.loginFunction = props.loginFunction;

      this.handleSubmit = this.handleSubmit.bind(this);
      this.chatServer.on('loginSuccess', this.loginSuccess.bind(this));
      this.chatServer.on('loginFail', this.loginFail.bind(this));
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.loginInput.value === "") {
      return;
    }
    this.chatServer.emit('userLogin', { 'username': this.loginInput.value} );
    this.chatServer.value = "";
  }

  loginSuccess(loginAttempt) {
    this.cookies.set(this.dailyLoginCookie, loginAttempt.username, { maxAge: Utils.convertDaysToSeconds(1) });
    this.loginFunction(loginAttempt.username);
  }
  
  loginFail(loginAttempt) {
    //TODO: Make this something less annoying than an alert
    alert("Username " + loginAttempt.username + " is already taken");
  }

  render() {
    return (
      <form id="user-login" onSubmit={this.handleSubmit}>
        <input type="text" name="login-input" ref={ref => this.loginInput = ref}></input>
        <input type="submit" value="Submit"></input>
        <ColorSelector />
      </form>
    );
  }
}

export default UserLogin