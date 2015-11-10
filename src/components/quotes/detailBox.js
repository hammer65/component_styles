"use strict";

var React = require('react');
var Panel = require('react-bootstrap/lib/Panel');

var DetailBox = React.createClass({
  render: function() {
    var title = <h3>{this.props.title}</h3>
    return (
      <Panel header={title}>
        {this.props.children}
      </Panel>
    );
  }
});

module.exports = DetailBox;
