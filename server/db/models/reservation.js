const compareDesc = require('date-fns/compareDesc')

const Sequelize = require('sequelize')
const db = require('../db')
const eachDayOfInterval = require('date-fns/eachDayOfInterval')
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
      let currentDate = new Date(this.startTime)
      currentDate.setHours(0)
      currentDate.setMinutes(0)
      currentDate.setSeconds(0)
      currentDate.setMilliseconds(0)
      let endDate = new Date(this.endTime)
      endDate.setHours(0)
      endDate.setMinutes(0)
      endDate.setSeconds(0)
      endDate.setMilliseconds(0)
      dates = eachDayOfInterval({
        start: currentDate,
        end: endDate
      })
      return dates
    }
  },
  totalCost: {
    type: Sequelize.INTEGER,
    defaultValue: 99999999
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
