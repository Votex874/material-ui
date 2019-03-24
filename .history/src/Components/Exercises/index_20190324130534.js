import React, { Fragment } from 'react'
import { Grid, Paper, Typography, ListItem, ListItemText, List } from '@material-ui/core'
import LeftPane from './LeftPane'
import RightPane from './RightPane'

const style = {
  Paper: {
    padding: 20,
    margin: '20 0 20 0'
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
                {exercises.map(({ title }) => {
                  return (
                    <ListItem button>
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
        Right Pane
      </Paper>
    </Grid>
  </Grid>