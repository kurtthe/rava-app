import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Login from '@pages/login/Login';
import SignUp from '@pages/sign-up/SignUp';
import Profile from '@pages/profile/Profile';
import Studio from '@pages/studio/Studio';
import NotFound from '@pages/NotFound';

const Routes: React.FC = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Login} />
      <Route exact path="/sign-up" component={SignUp} />
      <Route exact path="/complete-profile" component={Profile} />
      <Route exact path="/studio" component={Studio} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
