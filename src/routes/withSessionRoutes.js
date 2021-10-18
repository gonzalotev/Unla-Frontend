import React from 'react';
import { Route, Switch } from 'react-router';

import Register from 'pages/Register/index';

const WithSessionRoutes = () => (
  <Switch>
    <Route component={Register} />
  </Switch>
);

export default WithSessionRoutes;
