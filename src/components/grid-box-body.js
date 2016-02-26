import React from 'react';
import UiStyle from './ui-theme_epic';
import Radium from 'radium';

class GridBoxBody extends React.Component{
  render(){
    return (
      <div style={UiStyle.gridBoxBody}>
        {this.props.children}
      </div>
    );
  }
}

export default Radium(GridBoxBody);
