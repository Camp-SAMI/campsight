'use strict'

const db = require('../server/db')

const {
  User,
  Camper,
  Campgound,
  Campsite,
  Amenity,
  Reservation,
  campsiteReservations,
  campsiteAmenities
} = require('../server/db/models/index')
const {camperSites, tentSites, cabinSites} = require('../campSiteSeedData')

const Chance = require('chance')
const chance = new Chance(95698435)

const reservationQuantity = 2000
const campsiteReservationsQuantity = 2000
const numberOfCampers = 2000
const numberOfCampsites = 214


chance.mixin({
  camper: () => ({
    firstName: chance.first(),
    lastName: chance.last(),
    email: chance.email()
  })
})

chance.mixin({
  campsiteReservation: () => ({
    campsiteId: chance.integer({min: 1, max: numberOfCampsites}),
    reservationId: chance.unique(chance.integer, 1, {
      min: 1,
      max: campsiteReservationsQuantity
    })[0]
  })
})

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


  const endTime = new Date(startTimeRes.setDate(startTimeRes.getDate() + days))

  chance.mixin({
    reservation: () => ({
      startTime: startTimeRes,
      endTime: endTime,
      partyNumber: chance.integer({min: 1, max: 7}),
      campsiteId: chance.integer({
        min: 1,
        max: numberOfCampsites
      }),
      camperId: chance.integer({min: 1, max: numberOfCampers})
    })
  })
  reservations.push(chance.reservation())
}

const campsiteReservationsArray = []
const campsiteResIdCreator = chance.unique(
  chance.integer,
  campsiteReservationsQuantity,
  {min: 1, max: campsiteReservationsQuantity}
)
for (let i = 0; i < campsiteResIdCreator.length; i++) {
  campsiteReservationsArray.push({
    campsiteId: chance.integer({min: 1, max: numberOfCampsites}),
    reservationId: campsiteResIdCreator[i]
  })
}

const numberOfCampsitesArray = chance.unique(chance.integer, numberOfCampsites, {min:1,max: numberOfCampsites})
const campsiteAmenitiesArray = []
for (let i = 0; i < numberOfCampsitesArray.length; i++){
  campsiteAmenitiesArray.push({
     amenityId: chance.integer({min: 1, max: 3}),
     campsiteId: numberOfCampsitesArray[i]
  })
}


async function seed() {
  console.log(campsiteAmenitiesArray, "campsiteAmenities array -------------------------------------")
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
  await campsiteReservations.bulkCreate(campsiteReservationsArray)
  await campsiteAmenities.bulkCreate(campsiteAmenitiesArray)

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
