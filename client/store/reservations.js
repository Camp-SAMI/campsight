import axios from 'axios';

//ACTION TYPES
const GET_RESERVATIONS = 'GET_RESERVATIONS';

//ACTION CREATORS
const getReservations = reservations => ({
    type: GET_RESERVATIONS,
    reservations
});

//REDUCER
export default function reducer(reservations = [], action) {
    switch (action.type) {
        case GET_RESERVATIONS:
            return action.reservations;   
        default:
            return reservations;
    }
}

//THUNK CREATORS
export const fetchReservations = () => {
    return async dispatch => {
        const res = await axios.get('/api/reservations');
        const data = res.data;
        dispatch(getReservations(data));
    }
}