import * as React from 'react';
import { Route, Switch } from 'react-router';
import Index from '../components/index';

const Routes = () => (
  <Switch>
    <Route path="/" exact component={Index} />
  </Switch>
);

export default Routes;
