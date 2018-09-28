const Sequelize = require('sequelize')
const db = require('../db')

const campsite = db.define('campsite', {
<<<<<<< HEAD
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
  campsiteType: {
    type: Sequelize.ENUM('tent', 'trailer')
  }
})
||||||| merged common ancestors
    location: {
        type: Sequelize.GEOMETRY('POINT'),
        allowNull: false
    },
    coverImage: {
        type: Sequelize.STRING
    },
    images: {
        type: Sequelize.ARRAY(Sequelize.STRING)
    }
});
=======
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
>>>>>>> c194c615ecb976e7b2a00cef700862590a27b101

module.exports = campsite
