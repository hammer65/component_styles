"use strict";

var React = require('react');
var moment = require('moment');

var QuoteRow = React.createClass({
  propTypes: {
    quote: React.PropTypes.object.isRequired,
    onSelect: React.PropTypes.func.isRequired
  },

  onRowSelected: function() {
    this.props.onSelect(this.props.quote.id);
  },

  render: function() {
    var quote = this.props.quote,
        trClass = this.props.selected ? 'selected' : '';

    return (
      <tr onClick={this.onRowSelected} className={trClass}>
        <td>{quote.line}</td>
        <td>{quote.status}</td>
        <td>{moment(quote.effectiveDate).format('MM/DD/YYYY')}</td>
        <td>{moment(quote.expirationDate).format('MM/DD/YYYY')}</td>
        <td>{quote.createdBy}</td>
        <td>{moment(quote.createdAt).format('MM/DD/YYYY h:mm:ss a')}</td>
        <td>{moment(quote.lastUpdatedAt).format('MM/DD/YYYY h:mm:ss a')}</td>
      </tr>
    );
  }
});

module.exports = QuoteRow;
