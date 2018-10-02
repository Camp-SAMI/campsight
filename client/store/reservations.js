import axios from 'axios'

//ACTION TYPES
const GET_RESERVATIONS = 'GET_RESERVATIONS'
const GET_RESERVATIONS_ERROR = 'GET_RESERVATIONS_ERROR'

//ACTION CREATORS
const getReservations = reservations => ({
  type: GET_RESERVATIONS,
  reservations
})

export const getReservationsError = () => ({type: GET_RESERVATIONS_ERROR})

//REDUCER
export default function reducer(reservations = [], action) {
  switch (action.type) {
    case GET_RESERVATIONS:
      return action.reservations
    default:
      return reservations
  }
}

//THUNK CREATORS
export const fetchReservations = campsiteId => {
  return async dispatch => {
    try {
      let result
      if (campsiteId) {
        result = await axios.get(`/api/reservations/${campsiteId}/latest`)
      } else {
        result = await axios.get('/api/reservations')
      }
      dispatch(getReservations(result.data))
    } catch (err) {
      dispatch(getReservationsError())
    }
  }
}
