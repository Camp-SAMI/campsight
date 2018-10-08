//ACTION TYPES
const TOGGLE_CAMERA = 'TOGGLE_CAMERA'
const SET_CAMERA_DATA = 'SET_CAMERA_DATA'
const PERSIST_TICKET_FORM = 'PERSIST_TICKET_FORM'

//ACTION CREATORS
export const toggleCamera = () => ({
  type: TOGGLE_CAMERA
})

export const setCameraData = cameraData => ({
  type: SET_CAMERA_DATA,
  cameraData
})

export const persistTicketForm = formData => ({
  type: PERSIST_TICKET_FORM,
  formData
})

//REDUCER

export function ticketForm(ticketFormData = {}, action) {
  switch (action.type) {
    case PERSIST_TICKET_FORM:
      return action.formData
    default:
      return ticketFormData
  }
}

export function cameraData(camera = {}, action) {
  switch (action.type) {
    case SET_CAMERA_DATA:
      console.log(action.cameraData, 'camera data')
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
