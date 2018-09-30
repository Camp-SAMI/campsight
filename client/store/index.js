import {createStore, combineReducers, applyMiddleware} from 'redux'
import createLogger from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import user from './user'
import campsite from './campsite';
import campsites from './campsites';
import reservation from './reservation';
import reservations from './reservations';
import amenities from './amenities';

const reducer = combineReducers({amenities, campsite, campsites, reservation, reservations, user})
const middleware = composeWithDevTools(
  applyMiddleware(thunkMiddleware, createLogger({collapsed: true}))
)
const store = createStore(reducer, middleware)

export default store
export * from './user'
