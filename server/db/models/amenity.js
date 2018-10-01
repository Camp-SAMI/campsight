const Sequelize = require('sequelize')
const db = require('../db')

const amenity = db.define('amenity', {
  category: {
    type: Sequelize.STRING
  }
})

module.exports = amenity
