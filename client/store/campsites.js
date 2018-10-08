import axios from 'axios'

//ACTION TYPES
const GET_CAMPSITES = 'GET_CAMPSITES'
const UPDATE_CAMPSITE = 'UPDATE_CAMPSITE'
const CREATE_CAMPSITE = 'CREATE_CAMPSITE'

//ACTION CREATORS
const getCampsites = campsites => ({
  type: GET_CAMPSITES,
  campsites
})

const updateCampsite = campsite => ({
  type: UPDATE_CAMPSITE,
  campsite
})

const createCampsite = campsite => ({
  type: CREATE_CAMPSITE,
  campsite
})

//REDUCER
const reducer = (campsites = [], action) => {
  switch (action.type) {
    case GET_CAMPSITES:
      return action.campsites
    case UPDATE_CAMPSITE:
      let updatedCampsites = campsites.map(campsite => {
        return action.campsite.id === campsite.id ? action.campsite : campsite
      })
      return updatedCampsites
    case CREATE_CAMPSITE:
      return [...campsites, action.campsite]
    default:
      return campsites
  }
}

//THUNK MIDDLEWARE
export const fetchCampsites = () => {
  return async dispatch => {
    const res = await axios.get('/api/campsites')
    dispatch(getCampsites(res.data))
  }
}

export const getCampsitesWithCompatibleTimes = (start, end) => {
  return async dispatch => {
    const allCampsites = await axios.get('/api/campsites').data
    const filteredCampsites = allCampsites.filter(function(campsite) {
      return (
        !campsite.daysBooked().includes(start) &&
        !campsite.daysBooked().includes(end)
      )
    })
    dispatch(getCampsites(filteredCampsites))
  }
}

export const updateCampsiteToServer = updateInfo => {
  return async dispatch => {
    const {data} = await axios.put(
      `/api/campsites/${updateInfo.id}`,
      updateInfo
    )
    dispatch(updateCampsite(data))
  }
}

export const addNewCampsiteToServer = campsiteInfo => {
  return async dispatch => {
    const res = await axios.post(`/api/campsites`, campsiteInfo)
    const data = res.data
    dispatch(createCampsite(data))
  }
}

export default reducer
