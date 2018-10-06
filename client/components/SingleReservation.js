import React, {Component} from 'react'
import connect from 'react-redux'
import {Form} from 'semantic-ui-react'
// import fetchSingleReservation from '../store/reservation'

class SingleReservation extends Component {}

const mapStateToProps = state => ({
  reservation: state.reservation
})

// const mapDispatchToProps = dispatch => ({
//     fetchSingleReservation: id => dispatch(fetchSingleReservation(id))
// })

export default SingleReservation
