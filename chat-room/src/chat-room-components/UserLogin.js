import React, { Component } from 'react';
import Cookies from 'universal-cookie';
import ColorSelector from './ColorSelector'
import Utils from '../Utils'

//Component for UserLogin section
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
      this.state = { colorSelected: '#000000' };
  }

  //Function for form submit of user login
  //Params: event from handleSubmit
  handleSubmit(e) {
    e.preventDefault();
    if (this.loginInput.value === "") {
      return;
    }
    this.chatServer.emit('userLogin', { 'username': this.loginInput.value } );
    this.chatServer.value = "";
  }

  //Function given to ColorSelector component to set state to the current color selected
  //Params: string: color selected
  colorChanged = (color) => {
    this.setState({
      colorSelected: color.hex,
    });
  }

  //Function called when server emits a succesful login attempt
  //Params: object: login attempt
  loginSuccess(loginAttempt) {
    this.cookies.set(this.dailyLoginCookie, loginAttempt.username, { maxAge: Utils.convertDaysToSeconds(1) });
    this.loginFunction(loginAttempt.username, this.state.colorSelected);
  }
  
  //Function called when server emits an unsuccesful login attempt
  //Params: object: login attempt
  loginFail(loginAttempt) {
    //TODO: Make this something less annoying than an alert
    alert("Username " + loginAttempt.username + " is already taken");
  }

  //Renders user login
  render() {
    return (
      <form id="user-login" onSubmit={this.handleSubmit}>
        <div className="login-section">
          <h4 className="login-subheader">Choose username: </h4>
          <input type="text" name="login-input" ref={ref => this.loginInput = ref}></input>
          <input type="submit" value="Submit"></input>
        </div>
        <div className="login-section">
          <ColorSelector colorChangedFunction={ this.colorChanged } />
        </div>
      </form>
    );
  }
}

export default UserLogin