import React, { Component } from 'react';

class UserLogIn extends Component {
  render() {
    return (
      <form id="user-login" onSubmit={this.handleSubmit}>
        <input type="text" name="login-input" ref={ref => this.loginInput = ref}></input>
        <input type="submit" value="Submit"></input>
      </form>
    );
  }
}

export default UserLogIn