const TOGGLE_RESERVATIONS = 'TOGGLE_RESERVATIONS'

export const toggleReservations = () => ({type: TOGGLE_RESERVATIONS})

export default function reducer(toggle = false, action) {
  switch (action.type) {
    case TOGGLE_RESERVATIONS:
      return !toggle
    default:
      return toggle
  }
}
