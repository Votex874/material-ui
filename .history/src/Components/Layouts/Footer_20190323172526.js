import React from 'react';
import { Paper, Tabs, Tab } from '@material-ui/core'

const Footer = props => {
  return (
    <Paper className={classes.root}>
      <Tabs
        value={this.state.value}
        onChange={this.handleChange}
        indicatorColor="primary"
        textColor="primary"
        centered
      >
        <Tab label="Item One" />
        <Tab label="Item Two" />
        <Tab label="Item Three" />
      </Tabs>
    </Paper>
  );
}

export default Footer


