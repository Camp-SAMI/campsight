const Sequelize = require('sequelize');
const db = require('../db');

const campground = db.define('campground', {
    name: {
        type: Sequelize.STRING,
        allowNull: false,
        notEmpty: true,
        defaultValue: 'CampSight'
    },
    geolocation: {
        type: Sequelize.GEOMETRY('POINT'),
        allowNull: null
    }
});

module.exports = campground;