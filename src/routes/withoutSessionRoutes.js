import React from 'react';
import { Route, Switch } from 'react-router';

import Login from 'pages/Login';
import Home from 'pages/Home';

const WithoutSessionRoutes = () => (
  <Switch>
    <Route exact path="/login">
      <Login />
    </Route>
    <Route exact path="/">
      <Home />
    </Route>
  </Switch>
);

export default WithoutSessionRoutes;
