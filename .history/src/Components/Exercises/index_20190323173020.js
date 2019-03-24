import React from 'react'
import { Grid } from '@material-ui/core'

export default props =>
  <Grid container sm={12}>
    <Grid item sm={6}>
      Left Pane
    </Grid>
    <Grid item sm={6}>
      Right Pane
    </Grid>
  </Grid>