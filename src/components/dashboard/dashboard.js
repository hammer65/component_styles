"use strict";

var React = require('react');
var _ = require('lodash');
var DashboardBox = require('./dashboardBox');
var QuotesTable = require('./quotesTable');
var QuoteDetails = require('./quoteDetails');

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
    drivers: [
      {
      }
    ],
    vehicles: [
      {
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
    drivers: [
      {
      }
    ],
    vehicles: [
      {
        vin: '4T1BB46K67U023946'
      },
      {
        vin: 'jnkcv54e55m409501'
      }
    ],
    coverages: {
    }
  }
];

var Dashboard = React.createClass({
  getInitialState: function() {
    return { selectedQuote: null };
  },

  selectQuote: function(id) {
    this.setState({
      selectedQuote: _.find(quotes, { id: id })
    });
  },

  render: function() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-xs-12">
            <DashboardBox title="Quotes">
              <div style={{float: 'right'}}>
                <span>
                  New Quote
                </span>
                <span>
                  Remarket Quote
                </span>
              </div>
              <br style={{clear: 'both'}}/>
              <QuotesTable
                quotes={quotes}
                selectedQuote={this.state.selectedQuote}
                onSelect={this.selectQuote}/>
            </DashboardBox>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12 col-sm-6">
            <DashboardBox title="Quote Details">
              <QuoteDetails quote={this.state.selectedQuote} />
            </DashboardBox>
          </div>
          <div className="col-xs-12 col-sm-6">
            <DashboardBox title="Carrier Rates">
              <div style={{textAlign: 'center'}}>
                <p style={{fontStyle: 'italic', marginTop: '8px'}}>No Items Found</p>
              </div>
            </DashboardBox>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = Dashboard;
