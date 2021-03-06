import React, {Component, Fragment} from 'react'
import {getUnassignedTickets, getOpenTickets, getClosedTickets} from '../store'
import {fetchTickets, updateTicketToServer} from '../store/tickets'
import {fetchTicket} from '../store/ticket'
import {Divider, Header, Container} from 'semantic-ui-react'
import {connect} from 'react-redux'
import TicketTable from './TicketTable'
import SearchBar from './SearchBar'

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
  fetchTickets: (str) => dispatch(fetchTickets(str)),
  updateTicket: ticket => dispatch(updateTicketToServer(ticket)),
  fetchTicket: id => dispatch(fetchTicket(id))
})

class TicketList extends Component {
  constructor(props) {
    super(props)
    this.editSubmit = this.editSubmit.bind(this)
  }
  async componentDidMount() {
    if (this.props.fetchTickets) await this.props.fetchTickets();
  }

  editSubmit(ticket, e) {
    this.props.updateTicket(ticket)
  }

  render() {
    const {tickets, unassignedTickets, openTickets, closedTickets} = this.props
    return (
      <Fragment>
        <Container>
          <Divider hidden />
          <Header as="h1">All Tickets</Header>
          <SearchBar fetcher={this.props.fetchTickets} />
          <TicketTable
            headerName="Unassigned Tickets"
            tickets={unassignedTickets}
            editSubmit={this.editSubmit}
          />
          <Divider hidden />
          <TicketTable
            headerName="Open Tickets"
            tickets={openTickets}
            editSubmit={this.editSubmit}          
          />
          <Divider hidden />
          <TicketTable
            headerName="Closed Tickets"
            tickets={closedTickets}
            editSubmit={this.editSubmit}
          />
        </Container>
      </Fragment>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TicketList)
