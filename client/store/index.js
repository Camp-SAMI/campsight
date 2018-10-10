import {createStore, combineReducers, applyMiddleware} from 'redux'
import {createSelector} from 'reselect'
import createLogger from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import user from './user'
import campsite from './campsite'
import campsites from './campsites'
import reservation from './reservation'
import reservations from './reservations'
import amenities from './amenities'
import filteredCampsites from './filteredCampsites'
import campers from './campers'
import camper from './camper'
import ticket from './ticket'
import tickets from './tickets'
import {
  toggleCameraReducer,
  cameraData,
  ticketForm
} from './ticketFormContainer'
import itinerary from './itinerary'

const reducer = combineReducers({
  amenities,
  campsite,
  campsites,
  filteredCampsites,
  reservation,
  reservations,
  user,
  campers,
  camper,
  ticket,
  tickets,
  toggleCameraReducer,
  cameraData,
  ticketForm,
  itinerary,
})

export const selectTicketsList = state => state.tickets

export const getUnassignedTickets = createSelector(
  selectTicketsList,
  ticketList => ticketList.filter(t => t.priority === 'null')
)

export const getClosedTickets = createSelector(selectTicketsList, ticketList =>
  ticketList.filter(t => t.status === 'close')
)

export const getOpenTickets = createSelector(selectTicketsList, ticketList =>
  ticketList.filter(t => t.status !== 'close' && t.priority !== 'null')
)

const middleware = composeWithDevTools(
  applyMiddleware(thunkMiddleware, createLogger({collapsed: true}))
)
const store = createStore(reducer, middleware)

export default store
export * from './user'
