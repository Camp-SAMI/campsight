import axios from 'axios';

//ACTION TYPES
const GET_SINGLE_RESERVATION = 'GET_SINGLE_RESERVATION';

//ACTION CREATORS
const getReservation = reservation => ({
    type: GET_SINGLE_RESERVATION,
    reservation
});

//REDUCER
export default function reducer(reservation = {}, action) {
    switch (action.type) {
        case GET_SINGLE_RESERVATION:
            return action.reservation;
        default:
            return reservation;
    }
}

//THUNK CREATORS
export const fetchSingleReservation = id => {
    return async dispatch => {
        const res = await axios.get(`/api/reservations/${id}`);
        dispatch(getReservation(res.data));
    }
}