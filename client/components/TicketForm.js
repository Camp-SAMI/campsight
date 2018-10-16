import React, {Component, Fragment} from 'react'
import {
  Card,
  Grid,
  // Paper,
  TextField,
  FormGroup,
  Typography,
  Button,
  // Snackbar
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
    content: ''
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
      content: event.target.content.value,
      cameraData: this.props.cameraData
    }
    this.props.createTicket(form)

    this.setState(prevState => ({
      title: '',
      name: '',
      email: '',
      campsite: '',
      content: ''
    }))
  }

  clearForm = () => {
    this.setState({
      title: '',
      name: '',
      email: '',
      campsite: '',
      content: ''
    })
  }

  toggle = () => {
    this.props.persistTicketForm(this.state)
    this.props.toggle()
  }

  render() {
    const {title, name, email, content, campsite} = this.state

    return (
      <Fragment>
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
                      name="content"
                      value={content}
                      variant="outlined"
                      onChange={this.handleChange}
                      multiline
                      rows="4"
                      label="Content"
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
                      <Grid justify="center" alignContent="center" container>
                        <Grid item>
                          <Modal
                            style={{
                              height: 65,
                              justifyContent: 'center',
                              alignContent: 'center'
                            }}
                            trigger={
                              <Button
                                disabled={!this.state.content}
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
                        </Grid>
                      </Grid>
                      <img
                        className="ui image"
                        src={this.props.cameraData.selectedPic}
                      />
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
    margin: 10,
    backgroundColor: '#1cb5ac'
  },
  smButton: {
    width: '120px',
    margin: 10,
    backgroundColor: '#1cb5ac'
  }
}
