const Sequelize = require('sequelize');
const db = require('../db');

const campsite = db.define('campsite', {
    location: {
        type: Sequelize.GEOMETRY('POINT'),
        allowNull: false
    },
    coverImage: {
        type: Sequelize.STRING
    },
    images: {
        type: Sequelize.ARRAY(Sequelize.STRING)
    },
    typing: {
        type: Sequelize.ENUM(
            'tent',
            'trailer'
        )
    }
});

module.exports = campsite;