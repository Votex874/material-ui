import React, { Component } from 'react'
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import { TextField, Select, Button } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  FormControl: {
    width: 500
  }
})

export default withStyles(styles)(class extends Component {
  state = {
    title: '',
    description: '',
    muscles: ''
  } 

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    })
  }

  handleSubmit = () => {
    // TODO: validation

    const { exercise } = this.state

    this.props.onSubmit({
      ...exercise,
      id: exercise.title.toLocaleLowerCase().replace(/ /g, '-')
    })

    this.setState({
      open: false,
      exercise: {
        title: '',
        description: '',
        muscles: ''
      }
    })
  }

  render(){
    const { classes, muscles: categories } = this.props,
          { title, description, muscles} = this.state

    return (
      <form>
        <TextField
          label="Title"
          value={title}
          onChange={this.handleChange('title')}
          margin="normal"
          className={classes.FormControl}
        />
        <br />
        <FormControl className={classes.FormControl} >
          <InputLabel htmlFor="muscles">
            Muscles
                  </InputLabel>
          <Select
            value={muscles}
            onChange={this.handleChange('muscles')}
          >
            {categories.map((category, i) =>
              <MenuItem key={i} value={category}>
                {category}
              </MenuItem>
            )}
          </Select>
        </FormControl>
        <br />
        <TextField
          className={classes.FormControl}
          multiline
          rows="4"
          label="Description"
          value={description}
          onChange={this.handleChange('description')}
          margin="normal"
        />
        <br />
        <Button
          color="primary"
          variant="raised"
          onClick={this.handleSubmit}
        >
          Create
        </Button>
      </form>
    )
  }
})