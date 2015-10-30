"use strict";

var React = require('react');

var QuoteDetails = React.createClass({
  propType: {
      quote: React.PropTypes.object
  },

  render: function() {
    var quote = this.props.quote,
        content;

    if (quote) {
      content = <div>Vehicles ({quote.vehicles.length}):</div>;
    } else {
      content = <div style={{textAlign: 'center'}}>
        <p style={{fontStyle: 'italic', marginTop: '8px'}}>No Items Found</p>
      </div>;
    }

    return (
      <div>
        {content}
      </div>
    );
  }
});

module.exports = QuoteDetails;
