import axios from 'axios'

//ACTION TYPES
const GET_SINGLE_TICKET = 'GET_SINGLE_TICKET'
const GET_SINGLE_TICKET_ERROR = 'GET_SINGLE_TICKET_ERROR'

//ACTION CREATORS
const getTicket = ticket => ({
  type: GET_SINGLE_TICKET,
  ticket
})

const getTicketError = () => ({
  type: GET_SINGLE_TICKET_ERROR
})

//REDUCER
export default function reducer(ticket = {}, action) {
  switch (action.type) {
    case GET_SINGLE_TICKET:
      return action.ticket
    case GET_SINGLE_TICKET_ERROR:
      return ticket
    default:
      return ticket
  }
}

//THUNK CREATORS

export const createTicket = form => {
  return async dispatch => {
    try {
      const data = await axios.post('/api/tickets', form)
    } catch (err) {
      console.log(err)
    }
  }
}

export const fetchTicket = id => {
  return async dispatch => {
    try {
        console.log(id, 'fetchTicket----------------------')
      const res = await axios.get(`/api/tickets/${id}`)
      dispatch(getTicket(res.data))
    } catch (err) {
      dispatch(getTicketError())
    }
  }
}
