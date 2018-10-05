import axios from 'axios'

//ACTION TYPES
const GOT_CAMPERS = 'GOT_CAMPERS'
const CAMPERS_ERROR = 'CAMPERS_ERROR'

// ACTION CREATORS
export const gotCampers = campers => ({type: GOT_CAMPERS, campers})
export const campersError = () => ({type: CAMPERS_ERROR})

// THUNK MIDDLEWARE
export const fetchCampers = () => {
  return async dispatch => {
    try {
      const result = await axios.get(`/api/campers`)
      dispatch(gotCampers(result.data))
    } catch (err) {
      dispatch(campersError())
    }
  }
}

// Reducer
const reducer = (campers = [], action) => {
  switch (action.type) {
    case GOT_CAMPERS:
      return action.campers
    case CAMPERS_ERROR:
      return campers
    default:
      return campers
  }
}

export default reducer
