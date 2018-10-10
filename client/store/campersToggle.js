const TOGGLE_CAMPERS = 'TOGGLE_CAMPERS'

export const toggleCampers = () => ({type: TOGGLE_CAMPERS})

export default function reducer(toggle = false, action) {
  switch (action.type) {
    case TOGGLE_CAMPERS:
      return !toggle
    default:
      return toggle
  }
}
