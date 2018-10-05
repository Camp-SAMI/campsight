const Sequelize = require('sequelize')
const db = require('../db')

const campsite = db.define('campsite', {
  name: {
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
    type: Sequelize.ENUM('tent', 'trailer', 'cabin')
  },
  desc: {
    type: Sequelize.STRING,
    allowNull: false,
    defaultValue:
      'Nestled under Jackalberry and Mopanetree canopies, Tapioca campsite, laid out beautifully on the banks of the Kwando River, offers you the tranquillity of nature’s bounty. '
  },
  cost: {
    type: Sequelize.INTEGER,
    defaultValue: 3000
  }
})

module.exports = campsite
