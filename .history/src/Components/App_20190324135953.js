import React, { Component, Fragment } from 'react';
import { Header, Footer } from './Layouts/index'
import Excersises from './Exercises/index'
import { muscles, exercises } from '../store'

class App extends Component {
  state = {
    exercises,
    category: 'legs'
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

  handleCategorySelected = category => {
    this.setState({
      category
    })
  }

  render() {
    const exercises = this.getExercisesByMuscles(),
    { category } = this.state
    return (
      <Fragment>
        <Header />
        <Excersises exercises={exercises} />
        <Footer 
          category={category}
          muscles={muscles} 
          onSelect={this.handleCategorySelected}
          />
      </Fragment>
    );
  }
}

export default App;
