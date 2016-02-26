import React from 'react';
import Radium from 'radium';
//import UiStyle from './ui-theme_epic.js';
import Stage from './stage';
//import NavContainer from './nav-container';
//import Grid from './grid';
//import GridBox from './grid-box';
//import GridBoxHeader from './grid-box-header';

class Index extends React.Component {
  render(){
    console.log(Stage);
    return (
      <div>
        <Stage />
      </div>
    );
  }
}

export default Radium(Index);
