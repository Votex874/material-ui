import React, { Fragment } from 'react'
import { Grid, Paper, Typography, ListItem, ListItemText, List } from '@material-ui/core'
import LeftPane from './LeftPane'
import RightPane from './RightPane'

const style = {
  Paper: {
    padding: 20,
    margin: '20 0 20 0',
    height: 500,
    overflowY: 'auto'
  },
}

export default ({ exercises }) =>
  <Grid container>
    <Grid item sm>
      <Paper style={style.Paper}>
        {exercises.map(([group, exercises], i) => {
          return (
            <Fragment key={i}>
              <Typography
                key={i}
                variant='headline'
                style={{ textTransform: 'capitalize' }}
              >
                {group}
              </Typography>
              <List component="ul" >
                {exercises.map(({ title }, i) => {
                  return (
                    <ListItem key={i} button>
                      <ListItemText primary={title} />
                    </ListItem>
                  )
                })}
              </List>
            </Fragment>
          )         
          })}
      </Paper>  
    </Grid>
    <Grid item sm>
      <Paper style={style.Paper}>
        <Typography
          variant='display1'
        >
          Welcome!
        </Typography>
        <Typography
          variant='subheading'
          style={{marginTop: 20}}
        >Please select an exercise from the list on the left</Typography>
      </Paper>
    </Grid>
  </Grid>