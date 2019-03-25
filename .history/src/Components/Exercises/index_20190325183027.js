import React, { Fragment } from 'react'
import { Grid, Paper, Typography, ListItem, ListItemText, List, ListItemSecondaryAction, IconButton } from '@material-ui/core'
import { Delete, Edit } from '@material-ui/icons'
import Form from '../Exercises/Form'
const style = {
  Paper: {
    padding: 20,
    margin: '20 0 20 0',
    height: 500,
    overflowY: 'auto'
  },
}
export default ({ 
  exercises, category, onSelect, editMode, muscles,
  exercise: { 
    id,
    title = 'Welcome!',
    description = 'Please select an exercise from the list on the left' },
    onDelete,
    onSelectEdit
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
                      <ListItem 
                        key={i} 
                        button
                        onClick={() => onSelect(id)}
                        >
                        <ListItemText                           
                          primary={title} 

                        />
                        <ListItemSecondaryAction>
                          <IconButton onClick={() => onSelectEdit(id)} >
                            <Edit />
                          </IconButton>
                          <IconButton onClick={() => onDelete(id)} >
                            <Delete />
                          </IconButton>                         
                        </ListItemSecondaryAction>
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
        {editMode 
          ? <Form 
              muscles={muscles} 
            /> 
          : <Fragment>
              <Typography
                variant='display1'
              >
                {title}
              </Typography>
              <Typography
                variant='subheading'
                style={{ marginTop: 20 }}
              >
                {description}
              </Typography>
          </Fragment>
        }
      </Paper>
    </Grid>
  </Grid>