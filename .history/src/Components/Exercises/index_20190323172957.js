import React from 'react'
import { Grid } from '@material-ui/core'

export default props =>
  <Grid container sm={12}>
    <Grid item sm>
      Left Pane
    </Grid>
    <Grid item sm>
      Right Pane
    </Grid>
  </Grid>