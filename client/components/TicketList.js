import React, {Component, Fragment} from 'react'
import {getUnassignedTickets, getOpenTickets, getClosedTickets} from '../store'
import {fetchTickets, updateTicketToServer} from '../store/tickets'
import {fetchTicket} from '../store/ticket'
import {Divider, Header} from 'semantic-ui-react'
import {connect} from 'react-redux'
import TicketTable from './TicketTable'

function mapStateToProps(state) {
  const {tickets} = state
  return {
    tickets: tickets,
    unassignedTickets: getUnassignedTickets(state),
    openTickets: getOpenTickets(state),
    closedTickets: getClosedTickets(state)
  }
}

const mapDispatchToProps = dispatch => ({
  fetchTickets: () => dispatch(fetchTickets()),
  updateTicket: ticket => dispatch(updateTicketToServer(ticket)),
  fetchTicket: id => dispatch(fetchTicket(id))
})

class TicketList extends Component {
  constructor(props) {
    super(props)
    this.editSubmit = this.editSubmit.bind(this)
  }
  async componentDidMount() {
    if (this.props.fetchTickets) await this.props.fetchTickets()
  }

  editSubmit(ticket, e) {
    this.props.updateTicket(ticket)
  }

  render() {
    const {tickets, unassignedTickets, openTickets, closedTickets} = this.props
    return (
      <Fragment>
        <Divider hidden />
        <Header as="h1" floated="left">
          All Tickets
        </Header>
        <Divider hidden />
        <TicketTable tickets={unassignedTickets} editSubmit={this.editSubmit} />
        <Divider hidden />
        <TicketTable tickets={openTickets} editSubmit={this.editSubmit} />
        <Divider hidden />
        <TicketTable tickets={closedTickets} editSubmit={this.editSubmit} />
      </Fragment>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TicketList)
