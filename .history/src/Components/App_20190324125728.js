import React, { Component, Fragment } from 'react';
import { Header, Footer } from './Layouts/index'
import Excersises from './Exercises/index'
import { muscles, exercises } from '../store'

class App extends Component {
  state = {
    exercises
  }

  getExercisesByMuscles = () => {
    return Object.entries(
      this.state.exercises.reduce((exercises, exercise) => {
      const { muscles } = exercise
      
      exercises[muscles] = exercises[muscles] ? [...exercises[muscles], exercise] : [exercise]

      return exercises
    }, {})
    )
  }

  render() {
    const exercises = this.getExercisesByMuscles();
    return (
      <Fragment>
        <Header />
        <Excersises exercises={exercises} />
        <Footer muscles={muscles} />
      </Fragment>
    );
  }
}

export default App;
