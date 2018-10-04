import axios from 'axios';

//ACTION TYPES
const GET_CAMPSITES = 'GET_CAMPSITES';
const UPDATE_CAMPSITE = 'UPDATE_CAMPSITE';

//ACTION CREATORS
const getCampsites = campsites => ({
    type: GET_CAMPSITES,
    campsites
});

const updateCampsite = campsite => ({
    type: UPDATE_CAMPSITE,
    campsite
})

//REDUCER
const reducer = (campsites = [], action) => {
    switch (action.type) {
        case GET_CAMPSITES:
            return action.campsites;
        case UPDATE_CAMPSITE:
            let updatedCampsites = campsites.map(campsite => {
                return (action.campsite.id === campsite.id ? action.campsite : campsite)
            });
            return updatedCampsites;
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

export const updateCampsiteToServer = updateInfo => {
    return async dispatch => {
        const {data} = await axios.put(`api/campsites/${updateInfo.id}`, updateInfo);
        dispatch(updateCampsite(data));
    }
}

export default reducer;