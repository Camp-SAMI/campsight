import React, {Component} from 'react'
import {connect} from 'react-redux'
import {
  Container,
  Input,
  Button,
  Dropdown,
  TextArea,
  Segment,
  Form,
  Grid
} from 'semantic-ui-react'
import {fetchTicket} from '../store/ticket'
import {updateTicketToServer} from '../store/tickets'
import TicketMapView from './TicketMapView'

const statusOptions = [
  {value: 'open', text: 'Open'},
  {value: 'in-progress', text: 'In-Progress'},
  {value: 'close', text: 'Close'}
]

const priorityOptions = [
  {value: 'null', text: 'Null'},
  {value: '1', text: '1'},
  {value: '2', text: '2'},
  {value: '3', text: '3'},
  {value: '4', text: '4'},
  {value: '5', text: '5'}
]

class EditTicket extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      email: '',
      content: '',
      priority: '',
      status: '',
      image: '',
      location: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount() {
    this.setState({
      title: this.props.ticket.title,
      email: this.props.ticket.email,
      content: this.props.ticket.content,
      priority: this.props.ticket.priority,
      status: this.props.ticket.status,
      image: this.props.ticket.image,
      location: this.props.ticket.location
    })
  }

  handleChange(e, {name, value}) {
    this.setState({
      [name]: value
    })
  }

  handleSubmit(event) {
    // event.preventDefault()
    const {editSubmit} = this.props
    const ticket = {
      id: this.props.ticket.id,
      title: this.state.title,
      email: this.state.email,
      content: this.state.content,
      priority: this.state.priority,
      status: this.state.status,
      image: this.state.image,
      location: this.state.location
    }
    editSubmit(ticket)
  }

  render() {
    const {ticket} = this.props
    return (
      <Container>
        <Segment>
          <Form onSubmit={this.handleSubmit}>
            <Form.Group widths="equal">
              <Form.Input
                fluid
                type="text"
                name="title"
                label="Title"
                // disabled
                required={true}
                // onChange={this.handleChange}
                value={ticket.title}
              />
              <Form.Input
                fluid
                type="text"
                name="email"
                label="Email"
                // disabled
                required={true}
                // onChange={this.handleChange}
                value={ticket.email}
              />
            </Form.Group>
            <Form.Group widths="equal">
              <Form.TextArea
                name="content"
                label="Content"
                // disabled
                value={ticket.content}
                // onChange={this.handleChange}
                required={true}
              />
            </Form.Group>
            <Form.Group widths="equal">
              <Form.Dropdown
                fluid
                options={priorityOptions}
                selection
                item
                name="priority"
                label="Priority"
                required={true}
                onChange={this.handleChange}
                defaultValue={ticket.priority}
              />
              <Form.Dropdown
                fluid
                options={statusOptions}
                selection
                item
                name="status"
                label="Status"
                required={true}
                onChange={this.handleChange}
                defaultValue={ticket.status}
              />
            </Form.Group>
            <Button style={{margin: 15}} color="green" basic>
              Update
            </Button>
          </Form>
            <Grid>
            <Grid.Row columns={2} >
              <Grid.Column floated='left' >
                <img src={ticket.image} style={{width:'100%'}} />
              </Grid.Column>
              <Grid.Column floated='right'>
                <TicketMapView location={this.state.location} style={{width:'80%'}}/>
              </Grid.Column>
            </Grid.Row>
            </Grid>
        </Segment>
      </Container>
    )
  }
}

export default EditTicket
