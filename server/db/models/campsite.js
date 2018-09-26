const Sequelize = require('sequelize');
const db = require('../db');

const campsite = db.define('campsite', {
    location: {
        type: Sequelize.GEOMETRY('POINT'),
        allowNull: false
    }
});

module.exports = campsite;