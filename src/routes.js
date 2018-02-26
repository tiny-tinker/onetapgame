import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Loadable from 'react-loadable';
const Loading = () => <div>Loading...</div>;

const Home = Loadable({
  loader: () => import('./containers/home'),
  loading: Loading
});

const LoginPage = Loadable({
  loader: () => import('./containers/LoginPage'),
  loading: Loading
});

const SignupPage = Loadable({
  loader: () => import('./containers/SignupPage'),
  loading: Loading
});

const routes = (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/login" component={LoginPage} />
    <Route exact path="/signup" component={SignupPage} />
  </Switch>
);

export default routes;
