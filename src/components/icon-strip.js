import React from 'react';
import UiStyle from './ui-theme_epic';
import Radium from 'radium';

class IconStrip extends React.Component{
  render(){
    var icons = this.props.icons.map(function(name){
      return (<li><silk-icon name={name} /></li>);
    });
    return (
      <aside style={UiStyle.iconStrip}>
        <ul>
          {icons}
        </ul>
      </aside>
    );
  }
}

export default Radium(IconStrip);
