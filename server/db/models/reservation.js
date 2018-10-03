const compareDesc = require('date-fns/compareDesc')

const Sequelize = require('sequelize')
const db = require('../db')

const reservation = db.define('reservation', {
  startTime: {
    type: Sequelize.DATE,
    allowNull: false
  },
  endTime: {
    type: Sequelize.DATE,
    allowNull: false
  },
  partyNumber: {
    type: Sequelize.INTEGER,
    defaultValue: 1
  },
  daysBooked: {
    type: Sequelize.VIRTUAL,
    get() {
      let dates = []
      let currentDate = this.startTime
      while (currentDate <= this.endTime) {
        dates.push(new Date(currentDate))
        currentDate.setDate(currentDate.getDate() + 1)
      }
      return dates
    }
  }
})

// Gets the latest reservation for a given campsite
// How do I account for all the pockets of unbooked days
// between reservations up until the latest reservation?
reservation.getLatestCampsiteReservation = async function(campsiteId) {
  try {
    const reservations = await this.findAll({
      where: {campsiteId}
    })
    if (reservations.length) {
      return reservations.sort(function(a, b) {
        return compareDesc(a.dataValues.startTime, b.dataValues.startTime)
      })[0]
    } else {
      return 'There is nothing here'
    }
  } catch (error) {
    return `${error.message}`
  }
}

module.exports = reservation
