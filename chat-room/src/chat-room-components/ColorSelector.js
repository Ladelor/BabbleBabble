import React, { Component } from 'react';
import { TwitterPicker } from 'react-color';

class ColorSelector extends Component {
  constructor(props) {
    super(props);
    this.colorChangedFunction = props.colorChangedFunction;
  }

  render() {
    return (
      <div className="color-selector">
        <h4 className="login-subheader">Select Color</h4>
        <TwitterPicker onChange={ this.colorChangedFunction }/>
      </div>
    );
  }
}

export default ColorSelector