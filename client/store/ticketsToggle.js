const TOGGLE_TICKETS = 'TOGGLE_TICKETS'

export const toggleTickets = () => ({type: TOGGLE_TICKETS})

export default function reducer(toggle = false, action) {
  switch (action.type) {
    case TOGGLE_TICKETS:
      return !toggle
    default:
      return toggle
  }
}
