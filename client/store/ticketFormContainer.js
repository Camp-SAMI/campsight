//ACTION TYPES
const TOGGLE_CAMERA = 'TOGGLE_CAMERA'

//ACTION CREATORS
export const toggle_camera = () => ({
  type: TOGGLE_CAMERA
})

//REDUCER
export default function reducer(toggle = false, action) {
  switch (action.type) {
    case TOGGLE_CAMERA:
      return !toggle
    default:
      return toggle
  }
}


