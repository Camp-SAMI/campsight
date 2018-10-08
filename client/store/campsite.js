import axios from 'axios'

//ACTION TYPES
const GET_SINGLE_CAMPSITE = 'GET_SINGLE_CAMPSITE'
const GET_SINGLE_CAMPSITE_ERROR = 'GET_SINGLE_CAMPSITE_ERROR'

//ACTION CREATORS
const getCampsite = campsite => ({
  type: GET_SINGLE_CAMPSITE,
  campsite
})

const getCampsiteError = () => ({
  type: GET_SINGLE_CAMPSITE_ERROR
})

//REDUCER
const reducer = (campsite = {}, action) => {
  switch (action.type) {
    case GET_SINGLE_CAMPSITE:
      return action.campsite
    case GET_SINGLE_CAMPSITE_ERROR:
      return campsite
    default:
      return campsite
  }
}

//THUNK CREATORS
export const fetchCampsite = id => {
  console.log('id', id);
  return async dispatch => {
    try {
      const res = await axios.get(`/api/campsites/${id}`)
      console.log('Campsite =>', res.data)
      dispatch(getCampsite(res.data))
    } catch (err) {
      dispatch(getCampsiteError())
    }
  }
}

export default reducer
