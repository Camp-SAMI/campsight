import {format} from 'date-fns'
import React, {Component, Fragment} from 'react'
import {connect} from 'react-redux'
import {NavLink, withRouter} from 'react-router-dom'
import {Container, Grid, Table, Header, Divider, Tab} from 'semantic-ui-react'
import {fetchCamper} from '../store/camper'
import {fetchTickets} from '../store/tickets'
import {formatPrice} from '../utils/formatPrice'

class CamperProfile extends Component {
  componentDidMount = () => {
    this.props.fetchCamper(
      Number(this.props.match.params.camperId) || this.props.camperId
    )
    this.props.fetchTickets(this.props.camper.email)
  }

  render() {
    const {firstName, lastName, email, reservations} = this.props.camper
    const {tickets} = this.props
    console.log('Single Camper Props =>', this.props)
    const panes = [
      {
        menuItem: `Reservations`,
        pane: (
          <Tab.Pane key="reservations">
            <Table celled>
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell>ID</Table.HeaderCell>
                  <Table.HeaderCell>Start Time</Table.HeaderCell>
                  <Table.HeaderCell>End Time</Table.HeaderCell>
                  <Table.HeaderCell>Party Number</Table.HeaderCell>
                  <Table.HeaderCell>Price</Table.HeaderCell>
                </Table.Row>
              </Table.Header>
              <Table.Body>
                {reservations &&
                  reservations.map(reservation => (
                    <Table.Row key={reservation.id}>
                      <Table.Cell>
                        <NavLink to={`reservations/${reservation.id}`}>
                          {reservation.id}
                        </NavLink>
                      </Table.Cell>
                      <Table.Cell>
                        {format(reservation.startTime, 'MM/dd/yyyy')}
                      </Table.Cell>
                      <Table.Cell>
                        {format(reservation.endTime, 'MM/dd/yyyy')}
                      </Table.Cell>
                      <Table.Cell>{reservation.partyNumber}</Table.Cell>
                      <Table.Cell>
                        {formatPrice(reservation.totalCost)}
                      </Table.Cell>
                    </Table.Row>
                  ))}
              </Table.Body>
            </Table>
          </Tab.Pane>
        )
      },
      {
        menuItem: `Tickets`,
        pane: (
          <Tab.Pane key="tickets">
            <Table celled>
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell>ID</Table.HeaderCell>
                  <Table.HeaderCell>Title</Table.HeaderCell>
                  <Table.HeaderCell>Status</Table.HeaderCell>
                  <Table.HeaderCell>Priority</Table.HeaderCell>
                  <Table.HeaderCell>Created At</Table.HeaderCell>
                  <Table.HeaderCell>Updated At</Table.HeaderCell>
                </Table.Row>
              </Table.Header>
              <Table.Body>
                {tickets &&
                  tickets.map(ticket => (
                    <Table.Row key={ticket.id}>
                      <Table.Cell>
                        <NavLink to={`tickets/${ticket.id}`}>ticket.id</NavLink>
                      </Table.Cell>
                      <Table.Cell>
                        <NavLink to={`tickets/${ticket.id}`}>
                          {ticket.title}
                        </NavLink>
                      </Table.Cell>
                      <Table.Cell>{ticket.status}</Table.Cell>
                      <Table.Cell>{ticket.priority}</Table.Cell>
                      <Table.Cell>
                        {format(ticket.createdAt, 'MM/dd/yyyy')}
                      </Table.Cell>
                      <Table.Cell>
                        {format(ticket.updatedAt, 'MM/dd/yyyy')}
                      </Table.Cell>
                    </Table.Row>
                  ))}
              </Table.Body>
            </Table>
          </Tab.Pane>
        )
      }
    ]
    return (
      <Fragment>
        <Container>
          <Divider hidden />
          <Header as="h1">{`${firstName} ${lastName}`}</Header>
          <Divider hidden />
          <Grid.Column>
            <Table>
              <Table.Body>
                <Table.Row>
                  <Table.Cell>First Name:</Table.Cell>
                  <Table.Cell>{firstName}</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>Last Name:</Table.Cell>
                  <Table.Cell>{lastName}</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>Email:</Table.Cell>
                  <Table.Cell>{email}</Table.Cell>
                </Table.Row>
              </Table.Body>
            </Table>
          </Grid.Column>
          <Divider hidden />
          <Tab panes={panes} renderActiveOnly={false} />
        </Container>
      </Fragment>
    )
  }
}

const mapStateToProps = state => ({
  camper: state.camper,
  tickets: state.tickets
})

const mapDispatchToProps = dispatch => ({
  fetchCamper: camperId => dispatch(fetchCamper(camperId)),
  fetchTickets: camperEmail => dispatch(fetchTickets(camperEmail))
})

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(CamperProfile)
)
