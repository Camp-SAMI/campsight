const router = require('express').Router()
const {Camper, Reservation} = require('../db/models')
const isAdmin = require('../auth/isAdmin')
const isStafforAdmin = require('../auth/isStafforAdmin')

router.get('/', async (req, res, next) => {
  try {
    const campers = await Camper.findAll({
      include: [{model: Reservation}]
    })
    res.json(campers)
  } catch (err) {
    next(err)
  }
})

router.get('/:camperId', async (req, res, next) => {
  try {
    const targetCamper = await Camper.findById(req.params.camperId, {
      include: [{model: Reservation}]
    })
    res.json(targetCamper)
  } catch (err) {
    next(err)
  }
})

router.post('/', async (req, res, next) => {
  try {
    const newCamper = await Camper.create({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email
    })
    res.json(newCamper)
  } catch (err) {
    next(err)
  }
})

// Todo Update Camper

module.exports = router
