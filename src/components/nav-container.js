import React from 'react';
import {UiStyle} from './ui_styles_epic';
import Radium from 'radium';
import NavItem from './nav-item';

class NavContainer extends React.Component{
  render(){
    var tabs = this.props.tabs.map(function(T){
      return (<NavItem key={T.text} valid={T.valid} labelText={T.text} route={T.route} />);
    });
    return (
      <ul style={UiStyle.styles.navContainer}>
        {tabs}
      </ul>
    );
  }
}

export default Radium(NavContainer);
