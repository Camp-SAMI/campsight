import React, {Component} from 'react'
import {
  Card,
  Grid,
  Paper,
  TextField,
  FormGroup,
  Typography,
  Button
} from '@material-ui/core'

class TicketForm extends Component {
  render() {
    return (
      <Paper style={styles.paper}>
        <Grid
          container
          direction="column"
          justify="flex-start"
          alignItems="center"
          style={styles.gridContainer}
        >
          <Card>
            <Grid item>
                <Typography align='center'  variant='display1'>Submit Ticket Form</Typography>
              <FormGroup>
                <TextField variant='outlined' label="Title" style={styles.textFields} />
                <TextField variant='outlined' label="Name" style={styles.textFields} />
                <TextField variant='outlined' label="Email" style={styles.textFields} />
                <TextField variant='outlined' label="Campsite" style={styles.textFields} />
                <TextField variant='outlined' label="Description" style={styles.textFields} />
                <Button variant='raised' style={styles.button} color='primary'> Submit Form </Button>
              </FormGroup>
            </Grid>
          </Card>
        </Grid>
      </Paper>
    )
  }
}

const styles = {
  paper: {
    height: '100vh',
    width: '100vw'
  },
  textFields: {
    width: '50vw',
    margin: 10
  },
  gridContainer: {
    margin: 10
  },
  button: {
    width: '50vw',
    margin: 10
  }
 
}
export default TicketForm
