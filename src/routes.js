import React from 'react';
import {IndexRoute, Route} from 'react-router';
import App from './components/app';
import NotFoundPage from './components/notFoundPage';
import Index from './components/index';

var routes = (
  <Route path="/" component={App}>
    <IndexRoute component={Index} />
    <Route path="*" component={NotFoundPage} />
  </Route>
);

export default routes;
