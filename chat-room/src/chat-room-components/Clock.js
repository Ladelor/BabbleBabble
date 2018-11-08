import React, { Component } from 'react';

class Clock extends Component {

  constructor(props) {
    super(props);
    this.state = { 
        time: new Date().toLocaleTimeString() 
    }
  }

  componentDidMount() {
    this.intervalID = setInterval( () =>
      this.setState({
        time: new Date().toLocaleTimeString()
      }), 1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.intervalID);
  }

  render() {
    return (
      <span className="clock">{ this.state.time }</span>
    );
  }
}

export default Clock