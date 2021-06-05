import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Login from '../pages/Login'
import NotFound from '../pages/NotFound'

const Routes: React.FC = () => (
  
  <BrowserRouter>
      <Switch>
          <Route exact path='/' component={Login} />
          <Route component={NotFound} />
      </Switch>
  </BrowserRouter>
);

export default Routes;
