import axios from 'axios';

//ACTION TYPES
const GET_AMENITIES = 'GET_AMENITIES';

//ACTION CREATORS
const getAmenities = amenities => ({
    type: GET_AMENITIES,
    amenities
});

//REDUCER
export default function reducer(amenities = [], action) {
    switch (action.type) {
        case GET_AMENITIES:
            return action.amenities;    
        default:
            return amenities;
    }
}

//THUNK CREATOR
export const fetchAmenities = () => {
    return async (dispatch) => {
        const { data } = await axios.get('/amenities').data;
        dispatch(getAmenities(data));
    }
}