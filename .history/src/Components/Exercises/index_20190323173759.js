import React from 'react'
import { Grid, Paper } from '@material-ui/core'
import LeftPane from './LeftPane'
import RightPane from './RightPane'

const styles = {
  Paper: {
    padding: 20,
    margin: '20 0 20 0'
  },
}

export default props =>
  <Grid container>
    <Grid item sm>
      <LeftPane />
    </Grid>
    <Grid item sm>
      <RightPane />
    </Grid>
  </Grid>