const TOGGLE_CAMPSITES = 'TOGGLE_CAMPSITES'

export const toggleCampsites = () => ({type: TOGGLE_CAMPSITES})

export default function reducer(toggle = false, action) {
  switch (action.type) {
    case TOGGLE_CAMPSITES:
      return !toggle
    default:
      return toggle
  }
}
