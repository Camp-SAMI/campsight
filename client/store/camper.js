import axios from 'axios'

//ACTION TYPES
const GOT_CAMPER = 'GOT_CAMPER'
const CAMPER_ERROR = 'CAMPER_ERROR'

// ACTION CREATORS
export const gotCamper = camper => ({type: GOT_CAMPER, camper})
export const camperError = () => ({type: CAMPER_ERROR})

// THUNK MIDDLEWARE
export const fetchCamper = camperId => {
  return async dispatch => {
    try {
      const result = await axios.get(`/api/campers/${camperId}`)
      dispatch(gotCamper(result.data))
    } catch (err) {
      dispatch(camperError())
    }
  }
}

// Reducer
const reducer = (camper = {}, action) => {
  switch (action.type) {
    case GOT_CAMPER:
      return action.camper
    case CAMPER_ERROR:
      return camper
    default:
      return camper
  }
}

export default reducer
