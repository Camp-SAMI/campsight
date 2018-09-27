import axios from 'axios';

const initialState = {campsites: [], singleCampsite: {}}

//ACTION TYPES
const GET_CAMPSITES = 'GET_CAMPSITES';
const GET_SINGLE_CAMPSITE = 'GET_SINGLE_CAMPSITE';

//ACTION CREATORS
const getCampsites = campsites => ({
    type: GET_CAMPSITES,
    campsites
});

const getCampsite = campsite => ({
    type: GET_SINGLE_CAMPSITE,
    campsite
});

//REDUCER
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_CAMPSITES:
            return {...state, campsites: action.campsites};
        case GET_SINGLE_CAMPSITE:
            return {...state, singleCampsite: action.campsite};
        default:
            return state;
    }
};

//THUNK MIDDLEWARE
export const fetchCampsites = () => {
    return async dispatch => {
        const res = await axios.get('/api/campsites');
        dispatch(getCampsites(res.data));
    }
}

export const getCampsitesWithCompatibleTimes = (start, end) => {
    return async dispatch => {
        const allCampsites = await axios.get('api/campsites').data;
        const filteredCampsites = allCampsites.filter(function(campsite) {
            return !campsite.daysBooked().includes(start) && !campsite.daysBooked().includes(end);
        });
        dispatch(getCampsites(filteredCampsites));
    }
}

export const fetchSingleCampsite = id => {
    return async dispatch => {
        const {data} = await axios.get(`/api/campsites/${id}`);
        dispatch(getCampsite(data));
    }
}

export default reducer;