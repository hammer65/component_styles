import React from 'react';
import {UiStyle} from './ui_styles_epic';
import Radium from 'radium';

class GridBoxContent extends React.Component{
  render(){
    var styles = [UiStyle.styles.gridBoxContent];
    if(this.props.hasTable){
      styles.push(UiStyle.styles.gridBoxContentTable);
    }
    console.log('blah ',styles);
    return (
      <div style={styles}>
        {this.props.children}
      </div>
    );
  }
}

export default Radium(GridBoxContent);
