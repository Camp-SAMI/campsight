const Sequelize = require('sequelize');
const db = require('../db');

const reservation = db.define('reservation', {
    sentTime: {
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
    }
});

module.exports = reservation;