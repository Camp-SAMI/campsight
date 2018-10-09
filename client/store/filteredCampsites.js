import areIntervalsOverlapping from 'date-fns/areIntervalsOverlapping';
import format from 'date-fns/format';

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
                (!selectedAmenities.length || selectedAmenities.every(amenity => camp.amenities.map(am => am.category).includes(amenity))) &&
                (!startTime || !endTime || camp.reservations.every(reservation => checkReservationRange(startTime, endTime, reservation))) &&
                (!typing || typing === camp.typing)
            );
        });
        dispatch(getFilteredCamps(filteredCamps));
    }
}

export function checkReservationRange(startTime, endTime, reservation) {
    startTime = new Date(startTime);
    endTime = new Date(endTime);
    let startB = new Date(format(reservation.startTime, 'MM-dd-yyyy'));
    let endB = new Date(format(reservation.endTime, 'MM-dd-yyyy'));
    if (!(startTime <= endTime && startB <= endB))
        return false;
    return !areIntervalsOverlapping({start: startTime, end: endTime}, {start: startB, end: endB});
}

export default reducer;