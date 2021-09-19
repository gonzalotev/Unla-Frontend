import React from 'react';
import { Route, Switch } from 'react-router';

import Login from 'pages/Login';
import Home from 'pages/Home';

const WithoutSessionRoutes = () => (
  <Switch>
    <Route exact path="/login" component={Login} />
    <Route component={Home} />
  </Switch>
);

export default WithoutSessionRoutes;
