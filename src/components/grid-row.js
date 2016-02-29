import React from 'react';
import {UiStyle} from './ui_styles_epic';
import Radium from 'radium';

class GridRow extends React.Component{
  render(){
    return (
      <div style={UiStyle.styles.gridRow}>
        {this.props.children}
      </div>
    );
  }
}

export default Radium(GridRow);