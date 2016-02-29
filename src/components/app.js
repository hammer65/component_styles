import React from 'react';
import {Style} from 'radium';
import {StyleTags} from './ui_styles_epic';
import Stage from './stage';
import Grid from './grid';
import NavContainer from './nav-container';

var Tabs = [
  {
    text: "Overview",
    route: "",
    valid: true
  },
  {
    text: "Quote Info",
    route: "",
    valid: true
  },
  {
    text: "Drivers",
    route: "",
    valid: false
  },
  {
    text: "Coverages",
    route: ""
  },
  {
    text: "Incidents",
    route: ""
  },
  {
    text: "Quote",
    route: ""
  }
];

class App extends React.Component {
  render() {
    var MainStyles = StyleTags.map(function(T){
      return (
        <Style scopeSelector={T.scopeSelector} rules={T.rules} />
      );
    });
    return (
      <div>
        {MainStyles}
        <Stage>
          <NavContainer tabs={Tabs} />
          <Grid>
            {this.props.children}
          </Grid>
        </Stage>
      </div>
    );
  }
}

export default App;
