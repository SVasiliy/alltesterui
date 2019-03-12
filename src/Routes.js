import React from 'react';
import { Switch } from 'react-router-dom';
import Home from './containers/Home';
import ReactBootstrapTable2 from './containers/tests/react_bootstrap_table2/ReactBootstrapTable2';
import Loginform from './containers/login/Loginform';
import Clicker from './containers/tests/button_clicker/Clicker';
import Mobx from './containers/tests/mobx/Mobx';
import DummyKeycloaker from './containers/keycloak/DummyKeycloaker';
import Stopwatch from './containers/tests/stopwatch/Stopwatch';
import Users from './containers/tests/user_list/Users';
import CssPlay from './containers/tests/cssplay/CssPlay';
import AppliedRoute from './components/AppliedRoute';

export default ({ childProps }) =>
  (<Switch>
      <AppliedRoute path="/" exact component={Home} props={childProps} />
      <AppliedRoute path="/login" exact component={Loginform} props={childProps} />
      <AppliedRoute path="/clicker" exact component={Clicker} props={childProps} />
      <AppliedRoute path="/mobx" exact component={Mobx} props={childProps} />
      <AppliedRoute path="/stopwatch" exact component={Stopwatch} props={childProps} />
      <AppliedRoute path="/users" exact component={Users} props={childProps} />
      <AppliedRoute path="/react-bootstrap-table2" exact component={ReactBootstrapTable2} props={childProps} />
      <AppliedRoute path="/cssplay" exact component={CssPlay} props={childProps} />

      <AppliedRoute path="/dummykeycloaker" exact component={DummyKeycloaker} props={childProps} />
  </Switch>);
