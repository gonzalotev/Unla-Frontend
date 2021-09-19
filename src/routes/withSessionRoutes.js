import React from 'react';
import { Route, Switch } from 'react-router';

import Dashboard from 'pages/Dashboard';

const WithSessionRoutes = () => (
  <Switch>
    <Route component={Dashboard} />
  </Switch>
);

export default WithSessionRoutes;
