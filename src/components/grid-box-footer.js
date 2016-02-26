import React from 'react';
import UiStyle from './ui-theme_epic';
import Radium from 'radium';

class GridBoxFooter extends React.Component{
  render(){
    return (
      <div style={UiStyle.gridBoxFooter}>
        {this.props.children}
      </div>
    );
  }
}

export default Radium(GridBoxFooter);
