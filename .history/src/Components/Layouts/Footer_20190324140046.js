import React from 'react';
import { Paper, Tabs, Tab } from '@material-ui/core'
import { muscles } from '../../store';

const Footer = ({ muscles, onSelect, category }) => {
  const index = category 
  ? muscles.findIndex(group => group === category) + 1 
  : 0
  return (
    <Paper>
      <Tabs
        value={index}
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

