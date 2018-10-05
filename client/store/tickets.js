import axios from 'axios';

//ACTION TYPES
const GET_TICKETS = 'GET_TICKET';
const ADD_TICKET = 'ADD_TICKET';
const UPDATE_TICKET = 'UPDATE_TICKET';
const REMOVE_TICKET = 'REMOVE_TICKET';

//ACTION CREATORS
const getTickets = tickets => ({
    type: GET_TICKETS,
    tickets
});

const addTicket = ticket => ({
    type: ADD_TICKET,
    ticket
});

const updateTicket = ticket => ({
    type: UPDATE_TICKET,
    ticket
})

const removeTicket = ticketId => ({
    type: REMOVE_TICKET,
    ticketId
});

export default function reducer(tickets=[], action) {
    switch (action.type) {
        case GET_TICKETS:
            return action.tickets;
        case ADD_TICKET:
            return [...tickets, action.ticket];
        case UPDATE_TICKET:
            let updatedTickets = tickets.map(ticket => {
                return (action.ticket.id === ticket.id ? action.ticket : ticket)
            });
            return updatedTickets;
        case REMOVE_TICKET:
            const deleted = tickets.filter(ticket => {
                return ticket.id !== action.ticketId
            });
            return deleted;
        default:
            return tickets;
    }
}

//THUNK CREATORS

export const fetchTickets = () => {
   return async dispatch => {
       const res = await axios.get('/api/tickets');
       dispatch(getTickets(res.data));
   }
}
  
export const createTicket = ticket => {
   return async dispatch => {
       const {data} = await axios.post('/api/tickets', ticket);
       dispatch(addTicket(data));
  }
} 
export const updateTicketToServer = updateInfo => {
   return async dispatch => {
       const {data} = await axios.put(`api/tickets/${updateInfo.id}`, updateInfo);
       dispatch(updateTicket(data));
   }
}
  
  export const deleteTicket = ticketId => {
   return async dispatch => {
       await axios.delete(`/api/tickets/${ticketId}`);
       dispatch(removeTicket(ticketId));
   }
}
