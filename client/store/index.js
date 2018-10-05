import {createStore, combineReducers, applyMiddleware} from 'redux'
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
import ticket from './ticket'
import tickets from './tickets'

const reducer = combineReducers({
  amenities,
  campsite,
  campsites,
  filteredCampsites,
  reservation,
  reservations,
  user,
  campers,
  ticket,
  tickets
})

const middleware = composeWithDevTools(
  applyMiddleware(thunkMiddleware, createLogger({collapsed: true}))
)
const store = createStore(reducer, middleware)

export default store
export * from './user'
