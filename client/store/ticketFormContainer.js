//ACTION TYPES
const TOGGLE_CAMERA = 'TOGGLE_CAMERA'
const SET_CAMERA_DATA = 'SET_CAMERA_DATA'

//ACTION CREATORS
export const toggleCamera = () => ({
  type: TOGGLE_CAMERA
})

export const setCameraData = cameraData => ({
  type: SET_CAMERA_DATA,
  cameraData
})

//REDUCER

export function cameraData(camera = {}, action) {
  switch (action.type) {
    case SET_CAMERA_DATA:
      console.log(action.cameraData, "camera data")
      return action.cameraData
    default:
      return camera
  }
}

export function toggleCameraReducer(toggle = false, action) {
  switch (action.type) {
    case TOGGLE_CAMERA:
      return !toggle
    default:
      return toggle
  }
}
