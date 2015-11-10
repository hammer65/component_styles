"use strict";

var React = require('react');
var Grid = require('react-bootstrap/lib/Grid');
var PageHeader = require('react-bootstrap/lib/PageHeader');
var Row = require('react-bootstrap/lib/Row');
var Col = require('react-bootstrap/lib/Col');
var Tabs = require('react-bootstrap/lib/Tabs');
var Tab = require('react-bootstrap/lib/Tab');
var Input = require('react-bootstrap/lib/Input');

var QuoteForm = React.createClass({
  render: function() {
    return (
      <div style={{padding: '0px 5px'}}>
        <PageHeader>New Quote</PageHeader>
        <Tabs defaultActiveKey={1} animation={false} bsStyle="pills">
          <Tab eventKey={1} title="Auto" style={{paddingTop: '15px'}}>
            <Tabs defaultActiveKey={1} animation={false} bsStyle="pills">
              <Tab eventKey={1} title="Contract" style={{paddingTop: '25px'}}>
                <Grid fluid={true}>
                  <Row>
                    <Col xs={12} sm={6}>
                      <form className="form-horizontal">
                        <fieldset>
                          <legend>Policy Information</legend>
                          <Input type="select" label="Rating State:" labelClassName="col-xs-3" wrapperClassName="col-xs-9">
                            <option value=""></option>
                            <option value="AL">Alabama</option>
                            <option value="AK">Alaska</option>
                          </Input>
                          <Input type="select" label="County:" labelClassName="col-xs-3" wrapperClassName="col-xs-9">
                            <option value=""></option>
                          </Input>
                          <Input type="text" label="Effective Date:" labelClassName="col-xs-3" wrapperClassName="col-xs-9"/>
                          <Input type="select" label="Policy Term:" labelClassName="col-xs-3" wrapperClassName="col-xs-9"/>
                          <Input type="select" label="Residence Type:" labelClassName="col-xs-3" wrapperClassName="col-xs-9"/>
                          <Input type="select" label="Home Insurance:" labelClassName="col-xs-3" wrapperClassName="col-xs-9"/>
                        </fieldset>
                      </form>
                    </Col>
                    <Col xs={12} sm={6}>
                      <form className="form-horizontal">
                        <fieldset>
                          <legend>Current/Recent Insurance</legend>
                          <Input type="select" label="Insurance Status:" labelClassName="col-xs-3" wrapperClassName="col-xs-9">
                            <option value=""></option>
                          </Input>
                        </fieldset>
                      </form>
                    </Col>
                  </Row>
                </Grid>
              </Tab>
              <Tab eventKey={2} title="Drivers" style={{paddingTop: '25px'}}>
                <Grid fluid={true}>
                  <Row>
                    <Col xs={12} sm={6}>
                      <form className="form-horizontal">
                        <fieldset>
                          <legend>Driver Information</legend>
                          <Input type="select" label="Gender:" labelClassName="col-xs-3" wrapperClassName="col-xs-9">
                            <option value=""></option>
                          </Input>
                        </fieldset>
                      </form>
                    </Col>
                    <Col xs={12} sm={6}>
                      <form className="form-horizontal">
                      </form>
                    </Col>
                  </Row>
                </Grid>
              </Tab>
              <Tab eventKey={3} title="Vehicles"/>
              <Tab eventKey={4} title="Coverages"/>
              <Tab eventKey={5} title="Incidents"/>
              <Tab eventKey={6} title="Rate Sheet"/>
            </Tabs>
          </Tab>
        </Tabs>
      </div>
    );
  }
});

module.exports = QuoteForm;
