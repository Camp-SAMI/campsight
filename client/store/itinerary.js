const GOT_ITINERARY = 'GOT_ITINERARY'

export const gotItinerary = itinerary => ({type: GOT_ITINERARY, itinerary})

export default function reducer(itinerary = {}, action) {
  switch (action.type) {
    case GOT_ITINERARY:
      return action.itinerary
    default:
      return itinerary
  }
}
