import React from 'react';
import { Switch } from 'react-router-dom';
import Home from './containers/Home';
import Loginform from './containers/login/Loginform';
import AppliedRoute from './components/AppliedRoute';

export default ({ childProps }) =>
  (<Switch>
      <AppliedRoute path="/" exact component={Home} props={childProps} />
      <AppliedRoute path="/login" exact component={Loginform} props={childProps} />
  </Switch>);
