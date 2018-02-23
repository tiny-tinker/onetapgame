import React from 'react';
import Header from '../../components/header';
import routes from '../../routes';

const App = () => (
  <React.Fragment>
    <Header />
    <main>{routes}</main>
  </React.Fragment>
);

export default App;
