const Sequelize = require('sequelize')
const db = require('../db')

const amenity = db.define('amenity', {
  category: {
    type: Sequelize.ENUM(
      'Power',
      'Sewege',
      'Water'
    )
  }
})

module.exports = amenity
