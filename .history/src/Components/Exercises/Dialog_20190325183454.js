import React, { Component } from 'react'
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Button } from '@material-ui/core'
import { Add } from '@material-ui/icons';
import Form from './Form'


export default class extends Component { 
  state = {
    open: false,
  }

  handleToggle = () => {
    this.setState({
      open: !this.state.open
    })
  }

  render(){
    const { open } = this.state,
          { muscles, onCreate } = this.props
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
              muscles={muscles}
              onSubmit={onCreate}
            />
          </DialogContent>
        </Dialog>
      </React.Fragment>
    )
  }
}
  