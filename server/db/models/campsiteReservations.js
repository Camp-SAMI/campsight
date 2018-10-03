const Sequelize = require('sequelize')
const db = require('../db')

const campsiteReservations = db.define('campsite_reservations',{
  campsiteId: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  reservationId: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
})

module.exports = campsiteReservations