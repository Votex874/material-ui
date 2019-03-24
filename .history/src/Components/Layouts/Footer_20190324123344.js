import React from 'react';
import { Paper, Tabs, Tab } from '@material-ui/core'
import { muscles } from '../../store';

const Footer = ({ muscles }) => {
  return (
    <Paper>
      <Tabs
        value={0}
        indicatorColor="primary"
        textColor="primary"
        centered
      >
        {muscles.map( group => {
          return <Tab label={group} />
        })}
      </Tabs>
    </Paper>
  );
}

export default Footer


