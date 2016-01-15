import React from 'react';
import {Panel} from 'react-bootstrap';

class DetailBox extends React.Component {
  render() {
    var title = <h3>{this.props.title}</h3>
    return (
      <Panel header={title}>
        {this.props.children}
      </Panel>
    );
  }
}

export default DetailBox;
