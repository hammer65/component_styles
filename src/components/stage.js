import React from 'react';
import {UiStyle} from './ui_styles_epic';
//import Radium from 'radium';

class Stage extends React.Component{
  render(){
    return (
      <div style={UiStyle.styles.stage}>
        {this.props.children}
      </div>
    );
  }
}

export default Stage;
