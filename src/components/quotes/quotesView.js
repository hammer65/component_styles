"use strict";

var React = require('react');
var _ = require('lodash');
var Grid = require('react-bootstrap/lib/Grid');
var PageHeader = require('react-bootstrap/lib/PageHeader');
var Row = require('react-bootstrap/lib/Row');
var Col = require('react-bootstrap/lib/Col');
var DropdownButton = require('react-bootstrap/lib/DropdownButton');
var MenuItem = require('react-bootstrap/lib/MenuItem');
var LinkContainer = require('react-router-bootstrap').LinkContainer;
var QuoteSummary = require('./quoteSummary');
var QuotesTable = require('./quotesTable');

var quotes = [
  {
    id: 1,
    line: 'Auto',
    status: 'In Progress',
    effectiveDate: new Date(2015, 9, 17),
    expirationDate: new Date(2016, 9, 17),
    createdBy: 'Britton Nielsen',
    createdAt: new Date(2015, 9, 17, 11, 1, 32),
    lastUpdatedAt: new Date(2015, 9, 17, 11, 16, 55),
    applicant: {
      fullName: 'Jane Doe'
    },
    drivers: [
      {
        id: 1,
        fullName: 'Jane Doe'
      }
    ],
    vehicles: [
      {
        id: 1,
        vin: 'JN1CV6AR8CM681359'
      }
    ],
    coverages: {
    }
  },
  {
    id: 2,
    line: 'Auto',
    status: 'Quoted',
    effectiveDate: new Date(2014, 9, 17),
    expirationDate: new Date(2015, 9, 17),
    createdBy: 'Kate Hewitt',
    createdAt: new Date(2014, 9, 12, 16, 30, 1),
    lastUpdatedAt: new Date(2014, 9, 12, 16, 55, 43),
    applicant: {
      fullName: 'Bill Smith'
    },
    coApplicant: {
      fullName: 'Jean Smith'
    },
    drivers: [
      {
        id: 3,
        fullName: 'Bill Smith'
      }
    ],
    vehicles: [
      {
        id: 4,
        vin: '4T1BB46K67U023946'
      },
      {
        id: 5,
        vin: 'JNKCV54E55M409501'
      }
    ],
    coverages: {
    },
    rates: [
      {
        carrier: 'Safeco',
        rate: '$850.50'
      },
      {
        carrier: 'Travelers',
        rate: '$950.50'
      }
    ]
  }
];

var QuotesView = React.createClass({
  getInitialState: function() {
    return { selectedQuote: null };
  },

  selectQuote: function(id) {
    this.setState({
      selectedQuote: _.find(quotes, { id: id })
    });
  },

  render: function() {
    var quoteSummary = this.state.selectedQuote ?
                    <QuoteSummary quote={this.state.selectedQuote} /> :
                    '';
    return (
      <Grid fluid={true} className="quotes-grid">
        <Row>
          <Col xs={12}>
            <PageHeader>Quotes</PageHeader>
            <div className="quotes-box">
              <div className="quotes-box-btns clearfix">
                <DropdownButton className="pull-right" id="new-quote-btn" title="New Quote" >
                  <LinkContainer to="/quote">
                    <MenuItem>Auto</MenuItem>
                  </LinkContainer>
                </DropdownButton>
              </div>
              <QuotesTable
                quotes={quotes}
                selectedQuote={this.state.selectedQuote}
                onSelect={this.selectQuote}/>
            </div>
          </Col>
        </Row>
        {quoteSummary}
      </Grid>
    );
  }
});

module.exports = QuotesView;
