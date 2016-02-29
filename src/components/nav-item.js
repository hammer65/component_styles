import React from 'react';
import {UiStyle} from './ui_styles_epic';
import Radium from 'radium';

class NavItem extends React.Component{
  render(){
    var klasses = [UiStyle.styles.navItem]
    console.log(typeof this.props.valid);
    if(typeof this.props.valid != 'undefined'){
      var add = this.props.valid? UiStyle.styles.isValid : UiStyle.styles.isInvalid;
      klasses.push(add);
      console.log(klasses);
    }
    return (
      <li style={klasses}>
        {this.props.labelText}
      </li>
    );
  }
}

export default Radium(NavItem);