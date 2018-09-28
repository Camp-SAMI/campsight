import axios from 'axios';

//ACTION TYPES
const GET_SINGLE_CAMPSITE = 'GET_SINGLE_CAMPSITE';

//ACTION CREATORS
const getCampsite = campsite => ({
    type: GET_SINGLE_CAMPSITE,
    campsite
});

//REDUCER
const reducer = (campsite = {}, action) => {
    switch (action.type) {
        case GET_SINGLE_CAMPSITE:
            return action.campsite;
        default:
            return campsite;
    }
}

//THUNK CREATORS
export const fetchCampsite = (id) => {
    return async (dispatch) => {
        const res = await axios.get(`/api/campsites/${id}`);
        dispatch(getCampsite(res.data));
    }
};

export default reducer;