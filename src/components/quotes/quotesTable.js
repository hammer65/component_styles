import React from 'react';
import _ from 'lodash';
import QuoteRow from './quoteRow';
import NoItemsRow from './noItemsRow';

class QuotesTable extends React.Component {
  render() {
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
}
QuotesTable.propTypes = {
  quotes: React.PropTypes.array.isRequired,
  onSelect: React.PropTypes.func.isRequired
};

export default QuotesTable;
