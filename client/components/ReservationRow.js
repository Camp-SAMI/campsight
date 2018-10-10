import React, {Component} from 'react'
import {Table, Button, Modal} from 'semantic-ui-react'
import {NavLink} from 'react-router-dom'
import SingleReservation from './SingleReservation'
import {connect} from 'react-redux'
import {fetchSingleReservation} from '../store/reservation'
import {format} from 'date-fns'

class ReservationRow extends Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(id) {
    this.props.fetchSingleReservation(id)
  }

  render() {
    const {reserv} = this.props
    const {reservation} = this.props
    return (
      <Table.Row key={reserv.id}>
        <Table.Cell>
          <NavLink to={`reservations/${reserv.id}`}>{reserv.id}</NavLink>
        </Table.Cell>
        <Table.Cell>{reserv.camper.firstName}</Table.Cell>
        <Table.Cell>{reserv.camper.lastName}</Table.Cell>
        <Table.Cell>{reserv.camper.email}</Table.Cell>
        <Table.Cell>{format(reserv.startTime, 'MM/dd/yyyy')}</Table.Cell>
        <Table.Cell>{format(reserv.endTime, 'MM/dd/yyyy')}</Table.Cell>
        <Table.Cell>{reserv.partyNumber}</Table.Cell>
        <Table.Cell>
          {/* <Button basic color="green">
          Edit
        </Button> */}
          <Modal
            trigger={
              <Button
                basic
                color="green"
                value={reserv.id}
                onClick={() => this.handleClick(reserv.id)}
              >
                Edit
              </Button>
            }
          >
            {/* <Modal.Header>{reserv.id}</Modal.Header> */}
            <Modal.Description>
              <SingleReservation reservation={reserv} />
            </Modal.Description>
          </Modal>
        </Table.Cell>
      </Table.Row>
    )
  }
}

// const mapStateToProps = state => ({
//   reservation: state.reservation
// })

const mapDispatchToProps = dispatch => ({
  fetchSingleReservation: id => dispatch(fetchSingleReservation(id))
})

export default connect(null, mapDispatchToProps)(ReservationRow)
