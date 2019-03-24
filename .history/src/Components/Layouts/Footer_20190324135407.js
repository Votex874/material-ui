import React from 'react';
import { Paper, Tabs, Tab } from '@material-ui/core'
import { muscles } from '../../store';

const Footer = ({ muscles, onSelect }) => {
  return (
    <Paper>
      <Tabs
        value={0}
        onChange={}
        indicatorColor="primary"
        textColor="primary"
        centered
      > <Tab label='All' />
        {muscles.map( (group, i) => {
          return <Tab key={i} label={group} />
        })}
      </Tabs>
    </Paper>
  );
}

export default Footer


