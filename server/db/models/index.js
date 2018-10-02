const User = require('./user')
const Camper = require('./camper')
const Amenity = require('./amenity')
const Campground = require('./campground')
const Campsite = require('./campsite')
const Reservation = require('./reservation')
const campsiteReservations = require('./campSiteReservations')
const campsiteAmenities = require('./campsiteAmenities')

/**
 * If we had any associations to make, this would be a great place to put them!
 * ex. if we had another model called BlogPost, we might say:
 *
 *    BlogPost.belongsTo(User)
 */

/**
 * We'll export all of our models here, so that any time a module needs a model,
 * we can just require it from 'db/models'
 * for example, we can say: const {User} = require('../db/models')
 * instead of: const User = require('../db/models/user')
 */

Campground.hasMany(Campsite, {foreignKey: 'campgroundId', defaultValue: 1})
Campsite.belongsTo(Campground)

Campsite.hasMany(Reservation, {foreignKey: 'campsiteId', allowNull: false})
Campsite.belongsToMany(Reservation, {
  through: 'campsite_reservations',
  constraints: false
})
Reservation.belongsTo(Campsite)

Amenity.belongsToMany(Campsite, {through: campsiteAmenities})
Campsite.hasMany(Amenity)

Camper.hasMany(Reservation, {foreignKey: 'camperId', allowNull: false})
Reservation.belongsTo(Camper)

module.exports = {
  User,
  Camper,
  Campground,
  Campsite,
  Amenity,
  Reservation,
  campsiteReservations,
  campsiteAmenities
}
