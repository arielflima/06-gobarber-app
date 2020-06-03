import React from 'react';
import { Switch, Route } from 'react-router-dom';

import SighIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={SighIn} />
    <Route path="/signup" component={SignUp} />
  </Switch>
);

export default Routes;
