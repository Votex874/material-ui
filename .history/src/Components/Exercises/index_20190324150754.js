import React, { Fragment } from 'react'
import { Grid, Paper, Typography, ListItem, ListItemText, List } from '@material-ui/core'

const style = {
  Paper: {
    padding: 20,
    margin: '20 0 20 0',
    height: 500,
    overflowY: 'auto'
  },
}
export default ({ 
  exercises, category, onSelect, 
  exercise: { 
    id,
    title = 'Welcome!',
    description = 'Please select an exercise from the list on the left' }
  }) =>
  <Grid container>
    <Grid item sm>
      <Paper style={style.Paper}>
        {exercises.map(([group, exercises], i) => {
          return !category || category === group 
            ? (
              <Fragment key={i}>
                <Typography
                  key={i}
                  variant='headline'
                  style={{ textTransform: 'capitalize' }}
                >
                  {group}
                </Typography>
                <List component="ul" >
                  {exercises.map(({ id, title }, i) => {
                    return (
                      <ListItem key={i} button>
                        <ListItemText 
                          onClick={() => onSelect(id)}
                          primary={title} />
                      </ListItem>
                    )
                  })}
                </List>
              </Fragment>
            )         
          : null
          })}
      </Paper>  
    </Grid>
    <Grid item sm>
      <Paper style={style.Paper}>
        <Typography
          variant='display1'
        >
          {title}
        </Typography>
        <Typography
          variant='subheading'
          style={{marginTop: 20}}
        >{description}</Typography>
      </Paper>
    </Grid>
  </Grid>