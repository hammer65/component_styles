"use strict";

var React = require('react');
var DetailBox = require('./detailBox');
var QuoteDetails = require('./quoteDetails');
var Row = require('react-bootstrap/lib/Row');
var Col = require('react-bootstrap/lib/Col');

var QuoteSummary = React.createClass({
  propType: {
    quote: React.PropTypes.object.isRequired
  },

  render: function() {
    return (
      <Row>
        <Col xs={12} sm={6}>
          <DetailBox title="Quote Details">
            <QuoteDetails quote={this.props.quote} />
          </DetailBox>
        </Col>
        <Col xs={12} sm={6}>
          <DetailBox title="Carrier Rates">
            <div style={{textAlign: 'center'}}>
              <span style={{fontStyle: 'italic'}}>No Items Found</span>
            </div>
          </DetailBox>
        </Col>
      </Row>
    );
  }
});

module.exports = QuoteSummary;
