import React from 'react';
import {UiStyle} from './ui_styles_epic';
import Radium from 'radium';

class GridBoxHeader extends React.Component{
  render(){
    return (
      <header style={UiStyle.styles.gridBoxHeader}>
        <h1 style={UiStyle.styles.gridBoxHeaderH1}>{this.props.text}</h1>
      </header>
    );
  }
}

export default Radium(GridBoxHeader);
