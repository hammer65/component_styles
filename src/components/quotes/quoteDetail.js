"use strict";

var React = require('react');

var QuoteDetail = React.createClass({
  propType: {
    label: React.PropTypes.string.isRequired
  },

  render: function() {
    return (
      <div className="row" style={{margin: '5px 0'}}>
        <div className="col-xs-2" style={{textAlign: 'right'}}>
          {this.props.label}
        </div>
        <div className="col-xs-10" style={{fontWeight: 'bold'}}>
          {this.props.children}
        </div>
      </div>
    );
  }
});

module.exports = QuoteDetail;
