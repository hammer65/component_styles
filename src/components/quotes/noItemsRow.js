"use strict";

var React = require('react');

var NoItemsRow = React.createClass({
  render: function() {
    return (
      <tr style={{textAlign: 'center'}}>
        <td colSpan="7" style={{fontStyle: 'italic'}}>No Items Found</td>
      </tr>
    );
  }
});

module.exports = NoItemsRow;
