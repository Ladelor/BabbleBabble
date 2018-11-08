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
      <div className="clock">{ this.state.time }</div>
    );
  }
}

export default Clock