const TOGGLE_ANALITICS = 'TOGGLE_ANALITICS'

export const toggleAnalitics = () => ({type: TOGGLE_ANALITICS})

export default function reducer(toggle = false, action) {
  switch (action.type) {
    case TOGGLE_CAMPERS:
      return !toggle
    case TOGGLE_TICKETS:
      return !toggle
    case TOGGLE_RESERVATIONS:
      return !toggle
    case TOGGLE_CAMPSITES:
      return !toggle
    case TOGGLE_ANALITICS:
      return !!toggle
    default:
      return toggle
  }
}
