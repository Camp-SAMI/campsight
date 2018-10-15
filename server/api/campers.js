const router = require('express').Router()
const {Camper, Reservation} = require('../db/models')
const parseQueryToObject = require('../utils/parseQueryToObject');
// const isAdmin = require('../auth/isAdmin')
// const isStafforAdmin = require('../auth/isStafforAdmin')

router.get('/', async (req, res, next) => {
  try {
    let fieldTypes = await Camper.describe();
    let queryParams = [];
    if (req.query.search) {
      queryParams = req.query.search.split(',');
    }
    let queryObj = {};
    queryObj = parseQueryToObject(fieldTypes, queryParams);
    const campers = await Camper.findAll({
      where: {...queryObj},
      limit: 25,
      include: [{model: Reservation}],
      order: [['id', 'DESC']]
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

// Search functionality is not complete yet.
// router.get(`/search/:key`, async (req, res, next) => {
//   const key = req.params.key
//   try {
//     const campers = await Camper.findAll({
//       where: {}
//     })
//   } catch (err) {
//     next(err)
//   }
// })

// router.put(`/:camperId`, async (req, res, next) => {
//   const camperId = +req.params.camperId
//   const {firstName, lastName, email} = req.body
//   try {
//     const [rowsCount, rowCamper] = await Camper.update(
//       {
//         firstName,
//         lastName,
//         email
//       },
//       {
//         where: {
//           id: camperId
//         },
//         returning: true,
//         plain: true
//       }
//     )
//     if (!rowCamper.dataValues || rowCamper.dataValues === {}) {
//       throw new Error('Could not edit')
//     }
//     res.status(201).json(rowCamper.dataValues)
//   } catch (err) {
//     next(err)
//   }
// })

module.exports = router
