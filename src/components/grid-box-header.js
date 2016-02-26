import React from 'react';
import UiStyle from './ui-theme_epic';
import Radium from 'radium';

class GridBoxHeader extends React.Component{
  render(){
    return (
      <header style={UiStyle.gridBoxHeader}>
        <h1 style={UiStyle.gridBoxHeaderH1}>{this.props.text}</h1>
      </header>
    );
  }
}

export default Radium(GridBoxHeader);
