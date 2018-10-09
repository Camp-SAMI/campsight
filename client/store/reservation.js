import axios from 'axios'

//ACTION TYPES
const GET_SINGLE_RESERVATION = 'GET_SINGLE_RESERVATION'
const GET_SINGLE_RESERVATION_ERROR = 'GET_SINGLE_RESERVATION_ERROR'
const GET_CURRENT_RESERVATIONS = 'GET_CURRENT_RESERVATIONS'
const GET_CURRENT_RESERVATIONS_ERROR = 'GET_CURRENT_RESERVATIONS_ERROR'

const initalState = {
  reservation: {},
  currentReservations: []
}

//ACTION CREATORS
export const getReservation = reservation => ({
  type: GET_SINGLE_RESERVATION,
  reservation
})

export const getReservationError = () => ({
  type: GET_SINGLE_RESERVATION_ERROR
})

export const getCurrentReservations = currentReservations => ({
  type: GET_CURRENT_RESERVATIONS,
  currentReservations
})

export const getCurrentReservationsError = () => ({
  type: GET_CURRENT_RESERVATIONS_ERROR
})

//REDUCER
export default function reducer(state = initalState, action) {
  switch (action.type) {
    case GET_SINGLE_RESERVATION:
      return {...state, reservation: action.reservation}
    case GET_CURRENT_RESERVATIONS:
      return {...state, currentReservations: action.currentReservations}
    case GET_SINGLE_RESERVATION_ERROR:
      return state
    case GET_CURRENT_RESERVATIONS_ERROR:
      return state
    default:
      return state
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

export const fetchCurrentCampsiteReservations = campsiteId => {
  return async dispatch => {
    try {
      const res = await axios.get(`/api/reservations/${campsiteId}/latest`)
      dispatch(getCurrentReservations(res.data))
    } catch (err) {
      dispatch(getCurrentReservationsError())
    }
  }
}
