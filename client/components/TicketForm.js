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
import {connect} from 'react-redux'
import {toggle_camera} from '../store/ticketFormContainer'

class TicketForm extends Component {
  state = {
    title: '',
    name: '',
    email: '',
    campsite: '',
    description: ''
  }

  handleChange = ({target: {name, value}}) => {
    this.setState({
      [name]: value
    })
  }

  toggle = () => {
    this.props.toggle()
  }

  render() {
    const {title, name, email, description, campsite} = this.state

    return (
      <Grid container direction="column" justify="center" alignItems="center">
        <Grid
          container
          direction="column"
          justify="center"
          alignItems="center"
          style={styles.gridContainer}
        >
          <Card raised style={styles.card}>
            <Grid direction="column" container alignItems="center" item>
              <Typography align="center" variant="display1">
                Submit Ticket Form
              </Typography>
              <FormGroup>
                <TextField
                  name="title"
                  onChange={this.handleChange}
                  value={title}
                  variant="outlined"
                  label="Title"
                  style={styles.textFields}
                />
                <TextField
                  name="name"
                  variant="outlined"
                  value={name}
                  onChange={this.handleChange}
                  label="Name"
                  style={styles.textFields}
                />
                <TextField
                  name="email"
                  variant="outlined"
                  value={email}
                  onChange={this.handleChange}
                  label="Email"
                  style={styles.textFields}
                />
                <TextField
                  name="campsite"
                  variant="outlined"
                  value={campsite}
                  onChange={this.handleChange}
                  label="Campsite"
                  style={styles.textFields}
                />
                <TextField
                  name="description"
                  value={description}
                  variant="outlined"
                  onChange={this.handleChange}
                  multiline
                  rows="4"
                  label="Description"
                  style={styles.textFields}
                />
                <Grid container alignItems="center" direction="column">
                  <Grid
                    direction="row"
                    justify="space-evenly"
                    alignItems="center"
                    spacing={16}
                    container
                  >
                    <Grid item>
                      <Button
                        style={styles.smButton}
                        variant="raised"
                        color="primary"
                      >
                        Clear Form
                      </Button>
                    </Grid>
                    <Grid item>
                      <Button
                        style={styles.smButton}
                        variant="raised"
                        color="primary"
                        onClick={this.toggle}
                      >
                        Camera
                      </Button>
                    </Grid>
                  </Grid>
                  <Button
                    variant="raised"
                    style={styles.button}
                    color="primary"
                  >
                    Submit Form
                  </Button>
                </Grid>
              </FormGroup>
            </Grid>
          </Card>
        </Grid>
      </Grid>
    )
  }
}

const mapProps = dispatch => ({
  toggle: () => dispatch(toggle_camera())
})

export default connect(null, mapProps)(TicketForm)

const styles = {
  card: {
    width: '95%',
    heigth: '95%'
  },
  textFields: {
    width: '95%',
    margin: 10
  },
  gridContainer: {
    width: '100vw',
    margin: 10
  },
  button: {
    width: '50vw',
    margin: 10
  },
  smButton: {
    width: '120px',
    margin: 10
  }
}
