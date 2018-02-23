import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Loadable from 'react-loadable';
const Loading = () => <div>Loading...</div>;

const Home = Loadable({
  loader: () => import('./containers/home'),
  loading: Loading
});

const routes = (
  <Switch>
    <Route exact path="/" component={Home} />
  </Switch>
);

export default routes;
