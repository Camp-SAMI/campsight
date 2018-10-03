//ACTION TYPES
const GET_FILTERED_CAMPSITES = 'GET_FILTERED_CAMPSITES';

//ACTION CREATORS
const getFilteredCamps = campsites => ({
    type: GET_FILTERED_CAMPSITES,
    campsites
});

//REDUCER
const reducer = (filteredCampsites = [], action) => {
    switch (action.type) {
        case GET_FILTERED_CAMPSITES:            
            return action.campsites;
        default:
            return filteredCampsites;
    }
}

//THUNK MIDDLEWARE
export function getFilteredCampsites(campsites, selectedAmenities, startTime, endTime, typing) {
    return dispatch => {
        const filteredCamps = campsites.filter(camp => {
            return (
                (!selectedAmenities.length || selectedAmenities.every(amenity => camp.amenities.includes(amenity))) &&
                ((!startTime || !endTime) || camp.reservations.filter(reservation => !reservation.daysBooked().includes(startTime) && !reservation.daysBooked().includes(endTime))) &&
                (!typing || typing === camp.type)
            );
        });
        console.log('filteredCampsites', filteredCamps);
        dispatch(getFilteredCamps(filteredCamps));
    }
}

export default reducer;