import React, { Component } from 'react';
import { TwitterPicker } from 'react-color';

//Component for color selector in user login
//Uses TwitterPicker component from react-color package
class ColorSelector extends Component {
  constructor(props) {
    super(props);
    this.colorChangedFunction = props.colorChangedFunction;
  }

  //Renders Color Selector
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