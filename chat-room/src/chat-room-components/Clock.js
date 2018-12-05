import React, { Component } from 'react';

//Component for displaying clock in chatroom header
class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = { 
        time: new Date().toLocaleTimeString() 
    }
  }

  //Set interval for clock to tick every second when component is added to page
  componentDidMount() {
    this.intervalID = setInterval( () =>
      this.setState({
        time: new Date().toLocaleTimeString()
      }), 1000
    );
  }

  //Clear clock tick interval when removed from page
  componentWillUnmount() {
    clearInterval(this.intervalID);
  }

  //Renders Clock
  render() {
    return (
      <div className="clock">{ this.state.time }</div>
    );
  }
}

export default Clock