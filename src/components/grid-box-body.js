import React from 'react';
import {UiStyle} from './ui_styles_epic';
import Radium from 'radium';

class GridBoxBody extends React.Component{
  render(){
    return (
      <div style={UiStyle.styles.gridBoxBody}>
        {this.props.children}
      </div>
    );
  }
}

export default Radium(GridBoxBody);
