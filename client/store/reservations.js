import axios from 'axios'

//ACTION TYPES
const GET_RESERVATIONS = 'GET_RESERVATIONS'
const GET_RESERVATIONS_ERROR = 'GET_RESERVATIONS_ERROR'

//ACTION CREATORS
const getReservations = reservations => ({
  type: GET_RESERVATIONS,
  reservations
})

export const getReservationsError = reservations => ({
  type: GET_RESERVATIONS_ERROR,
  reservations
})

//THUNK CREATORS
export const fetchReservations = camperId => {
  return async dispatch => {
    try {
      let result
      if (camperId) {
        result = await axios.get(`/api/reservations/search/${camperId}`)
      } else {
        result = await axios.get(`/api/reservations`)
      }
      dispatch(getReservations(result.data))
    } catch (err) {
      dispatch(getReservationsError())
    }
  }
}

//REDUCER
export default function reducer(reservations = [], action) {
  switch (action.type) {
    case GET_RESERVATIONS:
      return action.reservations
    case GET_RESERVATIONS_ERROR:
      return reservations
    default:
      return reservations
  }
}
