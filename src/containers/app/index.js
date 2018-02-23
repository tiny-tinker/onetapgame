import React from 'react';
import Header from '../../components/header';
import routes from '../../routes';

const App = () => (
  <div>
    <Header />
    <main>{routes}</main>
  </div>
);

export default App;
