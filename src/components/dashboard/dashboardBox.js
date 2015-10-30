"use strict";

var React = require('react');

var DashboardBox = React.createClass({
  render: function() {
    return (
      <div style={{margin: '6px 0px'}}>
        <div style={{backgroundColor:'#959597', border: '1px solid #949494', fontSize: '14px', padding: '2px 12px', color: 'white', margin: '4px 0px'}}>
          {this.props.title}
        </div>
        <div style={{border: '1px solid #949494', minHeight: '250px'}}>
          {this.props.children}
        </div>
      </div>
    );
  }
});

module.exports = DashboardBox;
