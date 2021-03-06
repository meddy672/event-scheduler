// Dependencies
import React from 'react';
import { Route, Switch } from 'react-router-dom';

// Components
import App from './App';
import ScheduleEvent from './ScheduleEvent/ScheduleEvent';
import Events from './Events/Events';
import Error404 from './Error/404';

const AppRoutes = () => (
  <App>
    <Switch>
      <Route path="/schedule" component={ScheduleEvent} exact />
      <Route path="/events" component={Events} exact />
      <Route component={Error404} />
    </Switch>
  </App>
);

export default AppRoutes;