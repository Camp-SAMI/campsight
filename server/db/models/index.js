const User = require('./user')
const Camper = require('./camper');
const Amenity = require('./amenity');
const Campground = require('./campground');
const Campsite = require('./campsite');
const Reservation = require('./reservation');

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

Campground.hasMany(Campsite, { foreignKey: 'campgroundId', allowNull: false });
Campsite.belongsTo(Campground);

Campsite.hasMany(Reservation, { foreignKey: 'campsiteId', allowNull: false });
Campsite.belongsToMany(Reservation, {through: 'campsite_reservations', constraints: false });
Reservation.belongsTo(Campsite);

Amenity.belongsToMany(Campsite, {through: 'campsite_amenities'});
Campsite.hasMany(Amenity);

Reservation.belongsTo(Camper);
Camper.hasMany(Reservation, {foreignKey: 'camperId', allowNull: false});



module.exports = {
  User,
  Camper,
  Campground,
  Campsite,
  Amenity,
  Reservation
}
