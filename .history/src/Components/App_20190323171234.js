import React, { Component, Fragment } from 'react';
import Header from './Layouts/Header'
import Footer from './Layouts/Footer'


class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <Footer />
      </Fragment>
    );
  }
}

export default App;
