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
            <Fragment>
              <Typography
                key={i}
                variant='headline'
                style={{ textTransform: 'capitalize' }}
              >
                {group}
              </Typography>
              <List component="nav" >
                <ListItem button>
                  <ListItemText primary="Trash" />
                </ListItem>
                <ListItem href="#simple-list">
                  <ListItemText primary="Spam" />
                </ListItem>
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