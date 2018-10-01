'use strict'

const db = require('../server/db')

const {
  User,
  Camper,
  Campgound,
  Campsite,
  Amenity,
  Reservation
} = require('../server/db/models/index')
const {camperSites, tentSites, cabinSites} = require('../campSiteSeedData')

const Chance = require('chance')
const chance = new Chance(95698435)

const reservationQuantity = 2000
const campsiteReservationsQuantity = 2000
const numberOfCampers = 500
const numberOfCampsites = 214

// pickset, shuffle

// chance.mixin({
//   reservation: () => ({
//     startTime: chance.date({year: 2018}),
//     endTime: startTimeRes,
//     partyNumber: chance.integer({min: 1, max: 7}),
//     campsiteId: chance.unique(chance.integer, campsiteReservationsQuantity, {
//       min: 1,
//       max: reservationQuantity
//     })[0]
//   })
// })

chance.mixin({
  camper: () => ({
    firstName: chance.first(),
    lastName: chance.last(),
    email: chance.email()
  })
})

// chance.mixin({
//   amenityId: chance.natural({min: 1, max: 3}),
//   campsiteId: chance.unique(chance.natural({min: 1, max: numberOfCampsites}))
// })

// chance.mixin({
//   campsiteReservations: () => ({
//     campsiteId: chance.unique(
//       chance.natural({min: 1, max: campsiteReservationsQuantity})
//     ),
//     reservationId: chance.unique(
//       chance.natural({
//         min: 1,
//         max: campsiteReservationsQuantity
//       })
//     )
//   })
// })
// creating arrays for table
const camper = []
for (let i = 0; i < numberOfCampers; i++) {
  camper.push(chance.camper())
}

const reservations = []
for (let i = 0; i < reservationQuantity; i++) {
  const startTimeRes = chance.date({year: 2018})

  const days = chance.integer({min: 1, max: 14})
  startTimeRes.addDays = function() {
    startTimeRes.setDate(startTimeRes.getDate() + days)
    return startTimeRes
  }

  // 
  // const campSiteReservations = []
  // for (let i= 0; i < reservationQuantity;i++){

  // }

  const endTime = new Date(startTimeRes.setDate(startTimeRes.getDate() + days))

  chance.mixin({
    reservation: () => ({
      startTime: startTimeRes,
      endTime: endTime,
      partyNumber: chance.integer({min: 1, max: 7}),
      campsiteId:chance.integer ({
        min: 1,
        max: numberOfCampsites})
      
    })
  })
  reservations.push(chance.reservation())
}

async function seed() {
  await db.sync({force: true})
  console.log(`db ${db.config.database} synced!`)
  await Campsite.bulkCreate(camperSites)
  await Campsite.bulkCreate(tentSites)
  await Campsite.bulkCreate(cabinSites)
  await Amenity.bulkCreate([
    {category: 'Power'},
    {category: 'Sewege'},
    {category: 'water'}
  ])
  await Camper.bulkCreate(camper)
  await Reservation.bulkCreate(reservations)

  console.log(`seeded successfully`)
}

// async function seed() {
//   await db.sync({force: true})
//   console.log('db synced!')

//   const users = await Promise.all([
//     User.create({email: 'cody@email.com', password: '123'}),
//     User.create({email: 'murphy@email.com', password: '123'})
//   ])

//   console.log(`seeded ${users.length} users`)
//   console.log(`seeded successfully`)
// }

// We've separated the `seed` function from the `runSeed` function.
// This way we can isolate the error handling and exit trapping.
// The `seed` function is concerned only with modifying the database.
async function runSeed() {
  console.log('seeding...')
  try {
    await seed()
  } catch (err) {
    console.error(err)
    process.exitCode = 1
  } finally {
    console.log('closing db connection')
    await db.close()
    console.log('db connection closed')
  }
}

// Execute the `seed` function, IF we ran this module directly (`node seed`).
// `Async` functions always return a promise, so we can use `catch` to handle
// any errors that might occur inside of `seed`.
if (module === require.main) {
  runSeed()
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed
