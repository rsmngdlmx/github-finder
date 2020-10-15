import React, { Fragment } from 'react';
import Alert from '../layout/Alert';
import Footer from '../layout/Footer';
import Users from '../users/Users';
import Search from '../users/Search';

const Home = () => {
  return (
    <Fragment>
      <Search />
      <Alert />
      <Users />
      <Footer />
    </Fragment>
  )
};

export default Home;
