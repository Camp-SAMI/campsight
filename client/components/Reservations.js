import React, {Component, Fragment} from 'react'
import {connect} from 'react-redux'
import {Table, Divider, Container, Header} from 'semantic-ui-react'
import {fetchReservations} from '../store/reservations'
import ReservationRow from './ReservationRow'
import SearchBar from './SearchBar'
import {withRouter} from 'react-router-dom'

class Reservations extends Component {
  componentDidMount() {
    this.props.fetchReservations('')
  }
  render() {
    const reservations = this.props.reservations
    // console.log('props', this.props.fetchReservations);
    return (
      <Fragment>
        <Container>
          <Divider hidden />
          <Header as="h1">All Reservations</Header>
          <SearchBar fetcher={this.props.fetchReservations} />
          <Table celled>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Id</Table.HeaderCell>
                <Table.HeaderCell>First Name</Table.HeaderCell>
                <Table.HeaderCell>Last Name</Table.HeaderCell>
                <Table.HeaderCell>Email</Table.HeaderCell>
                <Table.HeaderCell>Start Time</Table.HeaderCell>
                <Table.HeaderCell>End Time</Table.HeaderCell>
                <Table.HeaderCell>Party Number</Table.HeaderCell>
                <Table.HeaderCell>Actions</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {reservations &&
                reservations.map(reservation => (
                  <ReservationRow key={reservation.id} reserv={reservation} />
                ))}
            </Table.Body>
          </Table>
        </Container>
      </Fragment>
    )
  }
}

const mapStateToProps = state => ({
  reservations: state.reservations
})

const mapDispatchToProps = dispatch => ({
  fetchReservations: (str) => dispatch(fetchReservations(str))
})

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Reservations)
)
