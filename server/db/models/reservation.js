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

reservation.getLatestCampsiteReservation = async function(campsiteId) {
  try {
    const reservations = await this.findAll({
      where: {campsiteId}
    })
    if (reservations.length) {
      return reservation.sort(compareDesc(a, b))[-1]
    }
    else {
      return 'There is nothing here'
    }
  } catch (error) {
    return `${error.message}`
  }
}

module.exports = reservation
