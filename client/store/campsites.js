import axios from 'axios';

//ACTION TYPES
const GET_CAMPSITES = 'GET_CAMPSITES';

//ACTION CREATORS
const getCampsites = campsites => ({
    type: GET_CAMPSITES,
    campsites
});

//REDUCER
const reducer = (campsites = [], action) => {
    switch (action.type) {
        case GET_CAMPSITES:
            return action.campsites;
        default:
            return campsites;
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

export default reducer;