import React from 'react';
import { Route, Switch } from 'react-router';

import RegisterForm from 'pages/Register/GeneralInfoForm';

const WithSessionRoutes = () => (
  <Switch>
    <Route component={RegisterForm} />
  </Switch>
);

export default WithSessionRoutes;
