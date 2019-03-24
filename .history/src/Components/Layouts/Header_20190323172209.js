import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core'


const Header = props => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="headline">Exercise Database</Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Header


