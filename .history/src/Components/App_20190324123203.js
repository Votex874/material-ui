import React, { Component, Fragment } from 'react';
import { Header, Footer } from './Layouts/index'
import Excersises from './Exercises/index'
import { muscles, exercises } from '../store'

class App extends Component {
  states = {
    exercises
  }

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
