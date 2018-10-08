import React, {Component, Fragment} from 'react'
import {
  Card,
  Grid,
  Paper,
  TextField,
  FormGroup,
  Typography,
  Button,
  Snackbar
} from '@material-ui/core'
import {Modal} from 'semantic-ui-react'
import {connect} from 'react-redux'
import {toggleCamera, persistTicketForm} from '../store/ticketFormContainer'
import {createTicket} from '../store/ticket'
import {HelpSubSuccess} from './'

class TicketForm extends Component {
  state = {
    title: '',
    name: '',
    email: '',
    campsite: '',
    description: '',
   
  }

  componentDidMount() {
    const formData = this.props.ticketForm

    this.setState(formData)
  }

  handleChange = ({target: {name, value}}) => {
    this.setState({
      [name]: value
    })
  }

  onSubmit = event => {
    event.preventDefault()
    const form = {
      title: event.target.title.value,
      name: event.target.name.value,
      email: event.target.email.value,
      campsite: event.target.campsite.value,
      description: event.target.description.value,
      cameraData: this.props.cameraData
    }
    this.props.createTicket(form)

    this.setState(prevState => ({
      title: '',
      name: '',
      email: '',
      campsite: '',
      description: ''
  
    }))
  }

  clearForm = () => {
    this.setState({
      title: '',
      name: '',
      email: '',
      campsite: '',
      description: ''
    })
  }

  toggle = () => {
    this.props.persistTicketForm(this.state)
    this.props.toggle()
  }

  render() {
    const {title, name, email, description, campsite} = this.state

    return (
      <Fragment>
      
          <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
          >
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
                  <form onSubmit={this.onSubmit}>
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
                              onClick={this.clearForm}
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
                        <Modal
                          trigger={
                        <Button
                          variant="raised"
                          style={styles.button}
                          color="primary"
                          type="submit"
                        >
                          Submit Form
                        </Button>
                           
                          }
                        >
                          <Modal.Content>
                            <HelpSubSuccess />
                          </Modal.Content>
                        </Modal>
                       <img className='ui image' src={this.props.cameraData.selectedPic}/> 
                      </Grid>
                    </FormGroup>
                  </form>
                </Grid>
              </Card>
            </Grid>
          </Grid>
        
      </Fragment>
    )
  }
}

const mapState = ({cameraData, ticketForm}) => {
  console.log(cameraData, 'cameradata ----------------------------------------------------')
  return {
    cameraData,
    ticketForm
  }
}

const mapProps = dispatch => ({
  toggle: () => dispatch(toggleCamera()),
  createTicket: form => dispatch(createTicket(form)),
  persistTicketForm: form => dispatch(persistTicketForm(form))
})

export default connect(mapState, mapProps)(TicketForm)

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
