import chance from 'chance'


const amenityQuantity = 3
const reservationQuantity = 500

// pickset, shuffle


const Chance = require('chance')
const chance = new Chance(95698435)

chance.mixin({
  reservation: () => ({
    startTime: chance.date(),
    endTime: chance.date(),
    partyNumber: chance.integer({min: 1, max: 7})
  })
})

chance.mixin({
  amenity: ()=>({
    category: chance.pickset(['Power', 'Sewege','Water'])
  })
})

chance.mixin({
  camper: ()=>({
    firstName: chance.first(),
    lastName: chance.last(),
    email: chance.email()
  })
})

chance.mixin({
  
})