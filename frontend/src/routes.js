// Dependencies
import React from 'react';
import { Route, Switch } from 'react-router-dom';

// Components
import App from './App';
import Event from './Event/Event'
import Error404 from './Error/404';

const AppRoutes = () => (
  <App>
    <Switch>
      <Route path="/" component={Event} exact />
      <Route component={Error404} />
    </Switch>
  </App>
);

export default AppRoutes;