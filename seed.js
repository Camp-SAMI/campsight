const db = require('../server/db')
const {
  User,
  Camper,
  Campgound,
  Campsite,
  Amenity,
  Reservation
} = require('./server/db/models/index')
const {campSiteSeedData} = require('./campSiteSeedData')

const Chance = require('chance')
const chance = new Chance(95698435)

const amenityQuantity = 3
const reservationQuantity = 500
const campsiteReservationsQuantity = 500
const numberOfCampers = 500
const numberOfCampsites = 300

// pickset, shuffle

const startTimeRes = chance.date()

chance.mixin({
  reservation: () => ({
    startTime: chance.date(),
    endTime: startTimeRes + chance.natural({min: 1, max: 14}),
    partyNumber: chance.integer({min: 1, max: 7}),
    campsiteId: chance.unique(
      chance.natural({min: 1, max: reservationQuantity})
    )
  })
})

chance.mixin({
  amenity: () => ({
    category: chance.pickset(['Power', 'Sewege', 'Water'])
  })
})

chance.mixin({
  camper: () => ({
    firstName: chance.first(),
    lastName: chance.last(),
    email: chance.email()
  })
})

chance.mixin({
  amenityId: chance.natural({min: 1, max: 3}),
  campsiteId: chance.unique(chance.natural({min: 1, max: numberOfCampsites}))
})

chance.mixin({
  campsiteReservations: () => ({
    campsiteId: chance.unique(
      chance.natural({min: 1, max: campsiteReservationsQuantity})
    ),
    reservationId: chance.unique(
      chance.natural({
        min: 1,
        max: campsiteReservationsQuantity
      })
    )
  })
})

// const productCategoryAssociations = []

// for (let i = 1; i <= numOfProducts; i++) {
//   const numOfAssocs = chance.natural({min: 1, max: 3})
//   const assocs = chance.unique(
//     () => chance.natural({min: 1, max: numOfCategories}),
//     numOfAssocs
//   )
//   for (let j = 0; j < numOfAssocs; j++) {
//     productCategoryAssociations.push({productId: i, categoryId: assocs[j]})
//   }
// }

// const lineItemAssociations = []

// for (let i = 1; i <= numOfOrders; i++) {
//   const numOfAssocs = chance.natural({min: 1, max: 5})
//   const assocs = chance.unique(
//     () => chance.natural({min: 1, max: numOfProducts}),
//     numOfAssocs
//   )
//   for (let j = 0; j < numOfAssocs; j++) {
//     lineItemAssociations.push({
//       orderId: i,
//       productId: assocs[j],
//       quantity: chance.natural({min: 1, max: 15}),
//       itemPrice: chance.natural({min: 400, max: 150000})
//     })
//   }
// }

// async function seed() {
//   await db.sync({force: true})
//   console.log(`db ${db.config.database} synced!`)

//   await Category.bulkCreate(
//     chance.unique(chance.word, numOfCategories).map(w => ({name: w}))
//   )
//   await Artist.bulkCreate(chance.n(chance.artist, numOfArtists))
//   await Product.bulkCreate(chance.n(chance.product, numOfProducts))
//   await User.bulkCreate(chance.n(chance.user, numOfUsers), {
//     individualHooks: true
//   })
//   await Review.bulkCreate(chance.n(chance.review, numOfReviews), {
//     individualHooks: true
//   })
//   await Order.bulkCreate(chance.n(chance.order, numOfOrders))
//   await ProductCategory.bulkCreate(productCategoryAssociations)
//   await LineItem.bulkCreate(lineItemAssociations, {
//     individualHooks: true
//   })
//}
async function seed(){
  await db.sync({force: true})
    console.log(`db ${db.config.database} synced!`)
  await Campsite.bulkCreate(campSiteSeedData)


  console.log(`seeded successfully`)
 }
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
