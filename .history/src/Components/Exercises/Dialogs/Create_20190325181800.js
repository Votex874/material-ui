import React, { Component } from 'react'
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Button, TextField, Select } from '@material-ui/core'
import { Add } from '@material-ui/icons';



export default withStyles(styles)(class extends Component { 
  state = {
    open: false,
    exercise: {
      title: '',
      description: '',
      muscles: ''
    }
  }

  handleToggle = () => {
    this.setState({
      open: !this.state.open
    })
  }

  handleChange = name => event => {
    this.setState({
      exercise: {
        ...this.state.exercise,
        [name]: event.target.value
      }
    })
  }

  handleSubmit = () => {
    // TODO: validation

    const { exercise } = this.state

    this.props.onCreate({
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
    const { open, exercise: { title, description, muscles} } = this.state
    return (
      <React.Fragment>
        <Button variant="fab" onClick={this.handleToggle} mini>
          <Add />
        </Button>
        <Dialog
          open={open}
          onClose={this.handleToggle}
        >
          <DialogTitle id="form-dialog-title">
            Create a new Exercise
          </DialogTitle>
          <DialogContent>
            <DialogContentText>
                Please fill out the from below.
            </DialogContentText>
            <Form 

            />
          </DialogContent>
          <DialogActions>
            <Button 
              color="primary"
              variant="raised"
              onClick={this.handleSubmit}      
              >              
              Create
            </Button>
          </DialogActions>
        </Dialog>
      </React.Fragment>
    )
  }
})
  