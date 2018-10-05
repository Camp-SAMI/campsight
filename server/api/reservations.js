const router = require('express').Router()
const {Reservation, Camper, Campsite} = require('../db/models')
const isAdmin = require('../auth/isAdmin')
const isStaffOrAdmin = require('../auth/isStafforAdmin')

router.get('/', isAdmin, async (req, res, next) => {
  try {
    const reservations = await Reservation.findAll({
      include: [{model: Camper}, {model: Campsite}]
    })
    if (reservations.length) {
      res.status(200).json(reservations)
    } else {
      res.status(404)
    }
  } catch (err) {
    next(err)
  }
})

router.get('/:id', async (req, res, next) => {
  try {
    const reservation = await Reservation.findById(req.params.id, {
      include: [{model: Camper}, {model: Campsite}]
    })
    res.json(reservation)
  } catch (err) {
    next(err)
  }
})

router.get(`/:campsiteId/latest`, async (req, res, next) => {
  const campsiteId = Number(req.params.campsiteId)
  try {
    const reservation = await Reservation.getLatestCampsiteReservation(
      campsiteId
    )
    if (reservation !== {}) {
      // console.log(`latest reservation =>`, reservation)
      res.status(200).json(reservation)
    } else {
      res.status(404)
    }
  } catch (err) {
    next(err)
  }
})

router.post('/', async (req, res, next) => {
  //written under the assumption that the user info is on the same form as on the actual reservation info
  try {
    const camper = await Camper.findOrCreate({
      where: [
        {firstName: req.body.firstName},
        {lastName: req.body.lastName},
        {email: req.body.email}
      ],
      returning: true
    })
    const campsite = await Campsite.findById(req.body.campsiteId)
    const newReservation = await Reservation.create({
      startTime: req.body.startTime,
      endTime: req.body.endTime,
      partyNumber: req.body.partNumber,
      camperId: camper.id,
      campsiteId: campsite.id
    })
    res.json(newReservation)
  } catch (err) {
    next(err)
  }
})

module.exports = router
