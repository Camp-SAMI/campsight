const Sequelize = require('sequelize')
const db = require('../db')

const ticket = db.define('ticket', {
  title:{
    type: Sequelize.STRING,
    allowNull: false
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {isEmail: true}
  },
  content: {
    type: Sequelize.TEXT,
  },
  priority: {
    type: Sequelize.ENUM('null','1','2','3','4','5'),
    defaultValue: 'null'
  },
  status: {
    type: Sequelize.ENUM('open','close','in-progress'),
    defaultValue: 'open'
  }
})

module.exports = ticket
