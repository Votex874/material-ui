import React from 'react'
import { Grid, Paper, Typography } from '@material-ui/core'
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
        {exercises.map(([group, exercises]) => {
          return (
            <Typography variant='headline'>
              {group}
            </Typography>
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