const Sequelize = require('sequelize')
const db = require('../db')

const amenity = db.define('amenity', {
<<<<<<< HEAD
  category: {
    type: Sequelize.ENUM(
      'Power',
      'Sewege',
      'Water'
    )
  }
})
=======
    category: {
        type: Sequelize.ENUM(
            'Bathroom Nearby',
            'Shower',
            'Power',
            'WiFi',
            'Sewage',
            'Water'
        )
    }
});
>>>>>>> 31088795284d15c24bd94b732cccd390fdb2cff7

module.exports = amenity
