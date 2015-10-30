"use strict";

var React = require('react');

var Router = require('react-router');
var IndexRoute = Router.IndexRoute;
var Route = Router.Route;

var routes = (
  <Route path="/" component={require('./components/app')}>
    <IndexRoute component={require('./components/dashboard/dashboard')} />
    <Route path="*" component={require('./components/notFoundPage')} />
  </Route>
);

module.exports = routes;
