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
    }, 
    power: {
        type: Sequelize.BOOLEAN,
        allowNull: false
    },
    water: {
        type: Sequelize.BOOLEAN,
        allowNull: false
    },
    sewage: {
        type: Sequelize.BOOLEAN,
        allowNull: false
    }
});

module.exports = campsite;