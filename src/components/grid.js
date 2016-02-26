import React from 'react';
import UiStyle from './ui-theme_epic';
import Radium from 'radium';

class Grid extends React.Component{
  render(){
    return (
      <div style={UiStyle.grid}>
        {this.props.children}
      </div>
    );
  }
}

export default Radium(Grid);
