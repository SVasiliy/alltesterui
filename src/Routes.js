import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './containers/Home';
import Login from './simpleform/Loginform';

export default () =>
  (<Switch>
      <Route path="/" exact component={Home} />
      <Route path="/login" exact component={Login} />
  </Switch>);
