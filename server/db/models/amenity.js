const Sequelize = require('sequelize');
const db = require('../db');

const amenity = db.define('amenity', {
    category: {
        type: Sequelize.ENUM(
            'Bathroom Nearby',
            'Shower',
            'Power',
            'WiFi'
        ),
        notNull: true
    }
});

module.exports = amenity;