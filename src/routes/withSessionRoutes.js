import React from 'react';
import { Route, Switch } from 'react-router';

import Register from 'pages/Register/index';
import FinalPage from 'pages/Register/FinalPage';

const WithSessionRoutes = () => (
  <Switch>
    <Route exact path="/" component={Register} />
    <Route exact path="/FinalPage" component={FinalPage} />
  </Switch>
);

export default WithSessionRoutes;
