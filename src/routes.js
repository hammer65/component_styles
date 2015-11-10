"use strict";

var React = require('react');

var Router = require('react-router');
var IndexRoute = Router.IndexRoute;
var Route = Router.Route;

var routes = (
  <Route path="/" component={require('./components/app')}>
    <IndexRoute component={require('./components/quotes/quotesView')} />
    <Route path="quote" component={require('./components/quote/quoteForm')} />
    <Route path="*" component={require('./components/notFoundPage')} />
  </Route>
);

module.exports = routes;
