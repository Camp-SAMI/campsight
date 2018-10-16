import axios from 'axios'

//ACTION TYPES
const GET_AMENITIES = 'GET_AMENITIES'
const GOT_SELECTED_AMENITIES = 'GET_SELECTED_AMENITIES'

//ACTION CREATORS
const getAmenities = amenities => ({
  type: GET_AMENITIES,
  amenities
})

const gotSelectedAmenities = id => ({
  type: GOT_SELECTED_AMENITIES,
  data
})

//REDUCER
export default function reducer(amenities = [], action) {
  switch (action.type) {
    case GET_AMENITIES:
      return action.amenities
    default:
      return amenities
  }
}

//THUNK CREATOR
export const fetchAmenities = () => {
  return async dispatch => {
    const res = await axios.get('/api/amenities')
    // console.log('data', res.data);
    dispatch(getAmenities(res.data))
  }
}

export const getSelectedAmenities = id => {
  return async dispatch => {
    const {data} = await axios.get(`/api/amenities/${id}`)
    dispatch(gotSelectedAmenities(data))
  }
}

// export const getFilteredAmenities = (column, searchValue) => {
//   return async dispatch => {
//     const res = await axios.get(`/api/amenities/filter/${column}/${searchValue}`)
//     dispatch(getAmenities(res.data))
//   }
// }
