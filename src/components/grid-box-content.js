import React from 'react';
import UiStyle from './ui-theme_epic';
import Radium from 'radium';

class GridBoxContent extends React.Component{
  render(){
    var styles = [UiStyle.gridBoxContent];
    if(this.props.hasTable){
      styles.push(UiStyle.gridBoxContentTable);
    }
    return (
      <div style={styles}>
        {this.props.children}
      </div>
    );
  }
}

export default Radium(GridBoxContent);
