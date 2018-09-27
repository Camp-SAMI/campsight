const Sequelize = require('sequelize');
const db = require('../db');

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
            let currentDate = this.startTime;
            while (currentDate <= this.endTime) {
                dates.push(new Date(currentDate));
                currentDate.setDate(currentDate.getDate() + 1);
            }
            return dates;
        }
    }
});

module.exports = reservation;