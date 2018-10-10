const _ = require('lodash')
const compareDesc = require('date-fns/compareDesc')
const compareAsc = require('date-fns/compareAsc')
const eachDayOfInterval = require('date-fns/eachDayOfInterval')
const differenceInDays = require('date-fns/differenceInDays')
const format = require('date-fns/format')

const Sequelize = require('sequelize')
const Op = require('sequelize').Op
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
      return eachDayOfInterval({
        start: this.startTime,
        end: this.endTime
      })
    }
  },
  totalCost: {
    type: Sequelize.INTEGER,
    get() {
      return (
        differenceInDays(this.endTime, this.startTime) * 3000 +
        differenceInDays(this.endTime, this.startTime) * 3000 * 0.1
      )
    }
  }
})

// Gets the lates reservation for a given campsite
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

reservation.getCurrentCampsiteReservations = async function(campsiteId) {
  try {
    const reservations = await this.findAll({
      where: {
        campsiteId,
        startTime: {[Op.gte]: new Date()}
      }
    })
    const currentBookedDays = reservations
      .reduce((acc, curr, idx) => {
        acc = acc.concat(curr.daysBooked)
        return acc
      }, [])
      .sort((a, b) => compareAsc(a, b))
      .map(data => format(new Date(data), 'MM/DD/YYYY'))

    return _.sortedUniq(currentBookedDays)
  } catch (error) {
    return `${error.message}`
  }
}

module.exports = reservation
