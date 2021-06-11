import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Login from '../pages/Login/Login'
import SignUp from '../pages/sign-up/SignUp'
import NotFound from '../pages/NotFound'

const Routes: React.FC = () => (
  
  <BrowserRouter>
      <Switch>
          <Route exact path='/' component={Login} />
          <Route exact path='/sign-up' component={SignUp} />
          <Route component={NotFound} />
      </Switch>
  </BrowserRouter>
);

export default Routes;
