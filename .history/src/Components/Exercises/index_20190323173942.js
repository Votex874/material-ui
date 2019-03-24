import React from 'react'
import { Grid } from '@material-ui/core'
import LeftPane from './LeftPane'
import RightPane from './RightPane'

const style = {
  Paper: {
    padding: 20,
    margin: '20 0 20 0'
  },
}

export default props =>
  <Grid container>
    <Grid item sm>
      <LeftPane styles={style} />
    </Grid>
    <Grid item sm>
      <RightPane styles={style} />
    </Grid>
  </Grid>