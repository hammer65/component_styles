import React from 'react';
import {UiStyle} from './ui_styles_epic';
import GridBoxHeader from "./grid-box-header";
import GridBoxBody from "./grid-box-body";
import GridBoxContent from "./grid-box-content";
import Radium from 'radium';

class GridBox extends React.Component{
  render(){
    console.log(GridBoxContent);
    return (
      <div style={UiStyle.styles.gridBox}>
        <GridBoxHeader text={this.props.text} />
        <GridBoxBody>
          <GridBoxContent>
            {this.props.children}
          </GridBoxContent>
        </GridBoxBody>
      </div>
    );
  }
}

export default Radium(GridBox);
