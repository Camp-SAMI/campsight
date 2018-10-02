const Sequelize = require('sequelize')
const db = require('../db')

const campsiteAmenities = db.define('campsite_amenities', {
  amenityId: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  campsiteId: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
})

module.exports = campsiteAmenities
