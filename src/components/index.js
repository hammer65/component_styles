import React from "react";
import Radium from "radium";
import GridRow from "./grid-row";
import GridBox from "./grid-box";
//import NavContainer from './nav-container';

class Index extends React.Component {
  render(){
    return (
      <div>
        <GridRow>
          <GridBox text="Title 1">
            <p>Title 1 content</p>
          </GridBox>
          <GridBox text="Title 2">
            <p>Title 2 content</p>
            <p>Title 2 content</p>
          </GridBox>
          <GridBox text="Title 3">
            <p>Title 3 content</p>
            <p>Title 3 content</p>
            <p>Title 3 content</p>
          </GridBox>
        </GridRow>
        <GridRow>
          <GridBox text="Vehicles">

          </GridBox>  
        </GridRow>
      </div>
    );
  }
}

export default Radium(Index);
