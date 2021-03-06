import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core'
import CreateDialog from '../Exercises/Dialogs/Create'

const Header = props => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="headline" color="inherit">Exercise Database</Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Header


