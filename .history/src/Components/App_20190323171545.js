import React, { Component, Fragment } from 'react';
import { Header, Footer } from './Layouts/index'
import Excersises from './Exercises/index'


class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <Excersises />
        <Footer />
      </Fragment>
    );
  }
}

export default App;
