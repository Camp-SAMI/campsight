import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Table} from 'semantic-ui-react'
import fetchReservations from '../store/reservations'

class Reservations extends Component {
  render() {
    return <Table />
  }
}

const mapStateToProps = state => ({
  reservations: state.reservations
})

const mapDispatchToProps = dispatch => ({
  fetchReservations: () => dispatch(fetchReservations)
})

export default connect(mapStateToProps, mapDispatchToProps)(Reservations)
