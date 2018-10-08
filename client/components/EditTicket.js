import React, {Component} from 'react'
import {connect} from 'react-redux'
import {
  Container,
  Input,
  Button,
  Dropdown,
  TextArea,
  Segment
} from 'semantic-ui-react'
import {fetchTicket} from '../store/ticket'
import {updateTicketToServer} from '../store/tickets'

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

const mapStateToProps = state => {
  return {
    ticket: state.ticket,
    tickets: state.tickets,
    user: state.user
  }
}

const mapDispatchToProps = dispatch => ({
  fetchTicket: id => dispatch(fetchTicket(id)),
  updateTicket: ticket => dispatch(updateTicketToServer(ticket))
})

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
   // this.props.fetchTicket(this.props.ticket.id)
    const ticket = this.props.ticket
    // console.log(
    //   this.props.ticket,
    //   'edit ticket form component did mount ======================================='
    // )
    this.setState({
      title: ticket.title,
      email: ticket.email,
      content: ticket.content,
      priority: ticket.priority,
      status: ticket.status,
      image: ticket.image,
      location: ticket.location
    })
  }

  handleChange(e, {name, value}) {
    this.setState({
      [name]: value
    })
  }

  handleSubmit(event) {
    event.preventDefault()
    const ticket = {
      title: this.state.title,
      email: this.state.email,
      content: this.state.content,
      priority: this.state.priority,
      status: this.state.status
    }
    this.props.updateTicket(ticket)
  }

  render() {
    return (
      <Container>
        <Segment>
          <Input
            fluid
            type="text"
            name="title"
            label="Title"
            disabled
            required={true}
            onChange={this.handleChange}
            defaultValue={this.state.title}
          />
          <Input
            fluid
            type="text"
            name="email"
            label="Email"
            disabled
            required={true}
            onChange={this.handleChange}
            defaultValue={this.state.email}
          />
        </Segment>
        <Segment>
          <TextArea
            name="content"
            label="Content"
            disabled
            defaultValue={this.state.content}
            onChange={this.handleChange}
            required={true}
          />
        </Segment>
        <Segment>
          <Dropdown
            fluid
            options={priorityOptions}
            selection
            item
            name="prioirty"
            label="Priority"
            required={true}
            onChange={this.handleChange}
            defaultValue={this.state.priority}
          />
          <Dropdown
            fluid
            options={statusOptions}
            selection
            item
            name="status"
            label="Status"
            required={true}
            onChange={this.handleChange}
            defaultValue={this.state.status}
          />
        </Segment>
        <Segment>
          <img src={this.state.image} />
        </Segment>
        <Button color="green" basic onClick={this.handleSubmit}>
          Update
        </Button>
      </Container>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditTicket)
