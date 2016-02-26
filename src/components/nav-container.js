import React from 'react';
import UiStyle from './ui-theme_epic';
import Radium from 'radium';

class NavContainer extends React.Component{
  render(){
    return (
      <ul style={UiStyle.NavContainer}>
        {this.props.children}
      </ul>
    );
  }
}

export default Radium(NavContainer);
