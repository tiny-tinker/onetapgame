import React from 'react';
import Header from '../../components/header';
import Footer from '../../components/footer';
import routes from '../../routes';

const App = () => (
  <React.Fragment>
    <Header />
    <main>{routes}</main>
    <Footer />
  </React.Fragment>
);

export default App;
