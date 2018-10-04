const Sequelize = require('sequelize');
const db = require('../db');
const eachDayOfInterval = require('date-fns/eachDayOfInterval');

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
            let dates = [];
            let currentDate = new Date(this.startTime);
            currentDate.setHours(0);
            currentDate.setMinutes(0);
            currentDate.setSeconds(0);
            currentDate.setMilliseconds(0);
            let endDate = new Date(this.endTime);
            endDate.setHours(0);
            endDate.setMinutes(0);
            endDate.setSeconds(0);
            endDate.setMilliseconds(0);
            dates = eachDayOfInterval({
                start: currentDate,
                end: endDate
            });
            return dates;
        }
    }
});

module.exports = reservation;