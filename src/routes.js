import React from 'react';
import {IndexRoute, Route} from 'react-router';
import App from './components/app';
import QuotesView from './components/quotes/quotesView';
import QuoteForm from './components/quote/quoteForm';
import NotFoundPage from './components/notFoundPage';

var routes = (
  <Route path="/" component={App}>
    <IndexRoute component={QuotesView} />
    <Route path="quote" component={QuoteForm} />
    <Route path="*" component={NotFoundPage} />
  </Route>
);

export default routes;
