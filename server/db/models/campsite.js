const Sequelize = require('sequelize');
const db = require('../db');

const campsite = db.define('campsite', {
    name:{
        type: Sequelize.STRING,
        allowNull: false
    },
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
            'trailer',
            'cabin'
        )
    }
});

module.exports = campsite;