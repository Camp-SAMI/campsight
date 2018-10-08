import axios from 'axios'

//ACTION TYPES
const GET_SINGLE_RESERVATION = 'GET_SINGLE_RESERVATION'
const GET_SINGLE_RESERVATION_ERROR = 'GET_SINGLE_RESERVATION_ERROR'

//ACTION CREATORS
const getReservation = reservation => ({
  type: GET_SINGLE_RESERVATION,
  reservation
})

export const getReservationError = () => ({
  type: GET_SINGLE_RESERVATION_ERROR
})

//REDUCER
export default function reducer(reservation = {}, action) {
  console.log('ACTION', action)
  switch (action.type) {
    case GET_SINGLE_RESERVATION:
      return action.reservation
    case GET_SINGLE_RESERVATION_ERROR:
      return reservation
    default:
      return reservation
  }
}

//THUNK CREATORS
export const fetchSingleReservation = id => {
  return async dispatch => {
    try {
      const res = await axios.get(`/api/reservations/${id}`)
      dispatch(getReservation(res.data))
    } catch (err) {
      dispatch(getReservationError())
    }
  }
}

export const fetchLatestCampsiteReservation = campsiteId => {
  return async dispatch => {
    try {
      const res = await axios.get(`/api/reservations/${campsiteId}/latest`)
      dispatch(getReservation(res.data))
    } catch (err) {
      dispatch(getReservationError())
    }
  }
}
