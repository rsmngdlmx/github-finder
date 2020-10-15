import React, { Fragment } from 'react';
import Footer from '../layout/Footer';

const About = () => {
  return (
    <Fragment>
      <h1 className='mb-1'>About Github Finder</h1>
      <p>This is an app to search Github users.</p>
      <p>App version: 1.0.0</p>
      <Footer />
    </Fragment>
  )
}

export default About;
