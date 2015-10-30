"use strict";

var React = require('react');
var _ = require('lodash');
var QuoteRow = require('./quoteRow');
var NoItemsRow = require('./noItemsRow');

var QuotesTable = React.createClass({
  propTypes: {
    quotes: React.PropTypes.array.isRequired,
    onSelect: React.PropTypes.func.isRequired
  },

  render: function() {
    var quotes = this.props.quotes,
        rows = quotes.length > 0 ?
                 _.map(quotes, function(quote) {
                   return <QuoteRow
                            key={quote.id}
                            quote={quote}
                            selected={quote === this.props.selectedQuote}
                            onSelect={this.props.onSelect} />;
                 }.bind(this)) : <NoItemsRow />;

    return (
      <div className="table-responsive" style={{minHeight: '300px'}}>
        <table className="table table-hover">
          <thead>
            <tr>
              <th>Line</th>
              <th>Status Description</th>
              <th>Effective</th>
              <th>Expiration</th>
              <th>Entered By</th>
              <th>Entered At</th>
              <th>Last Updated</th>
            </tr>
          </thead>
          <tbody>
            {rows}
          </tbody>
        </table>
      </div>
    );
  }
});

module.exports = QuotesTable;
