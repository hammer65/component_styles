import React from 'react';
import UiStyle from './ui-theme_epic';
import Radium from 'radium';

class GridBox extends React.Component{
  render(){
    return (
      <div style={UiStyle.gridBox}>
        {this.props.children}
      </div>
    );
  }
}

export default Radium(GridBox);
