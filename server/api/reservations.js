const formatRelative = require('date-fns/formatRelative')
const endOfDay = require('date-fns/endOfDay')
const startOfDay = require('date-fns/startOfDay')
const nodemailer = require('nodemailer')
const router = require('express').Router()
const {Reservation, Camper, Campsite} = require('../db/models')
const isAdmin = require('../auth/isAdmin')
const isStaffOrAdmin = require('../auth/isStafforAdmin')
const formatPrice = require('../utils/formatPrice')
const {Op} = require('sequelize')
const camelCase = require('../utils/camelCase');
const parseQueryToObject = require('../utils/parseQueryToObject');

router.get('/', async (req, res, next) => {
  try {
    let fieldTypes = await Reservation.describe();
    let queryParams = [];
    if (req.query.search) {
      queryParams = req.query.search.split(',');
    }
    let queryObj = {};
    queryObj = parseQueryToObject(fieldTypes, queryParams);
    let targetCamper = {};
    let keys = queryParams.map(queryPar => camelCase(queryPar.split(':')[0].split(' ').join('').trim()));
    let values = queryParams.map(queryPar => queryPar.split(':')[1].trim());
    // let camperId;
    if (keys.includes('firstName')) {
      let fNameInd = keys.findIndex(key => key === 'firstName');
      targetCamper.firstName = values[fNameInd];
    }
    if (keys.includes('lastName')) {
      let lastNameInd = keys.findIndex(key => key === 'lastName');
      targetCamper.lastName = values[lastNameInd];
    }
    if (keys.includes('email')) {
      let emailInd = keys.findIndex(key => key === 'email');
      targetCamper.email = values[emailInd];
    }
    const reservations = await Reservation.findAll({
      where: {...queryObj},
      limit: 15,
      include: [{model: Camper, where: {...targetCamper}}, {model: Campsite}],
      order: [['id', 'DESC']]
    })
    res.json(reservations)
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
    const reservations = await Reservation.getCurrentCampsiteReservations(
      campsiteId
    )
    res.status(200).json(reservations)
  } catch (err) {
    next(err)
  }
})

router.get(`/filter/:columnValue/:searchValue`, async (req, res, next) => {
  let {columnValue, searchValue} = req.params
  try {
    // Consider search by Camper details
    let reservations
    const camperFields = ['firstName', 'lastName', 'email']
    const dateFields = ['startTime', 'endTime']

    if (camperFields.includes(columnValue)) {
      const campers = await Camper.findAll({
        where: {
          [columnValue]: searchValue
        }
      })
      columnValue = 'camperId'
      searchValue = campers.map(camper => ({[Op.eq]: camper.id}))

      reservations = await Reservation.findAll({
        limit: 15,
        include: [{model: Camper}, {model: Campsite}],
        where: {
          [columnValue]: {
            [Op.or]: searchValue
          }
        }
      })
    } else if (dateFields.includes(columnValue)) {
      // console.log(
      //   'Start of day =>',
      //   startOfDay(new Date(searchValue)),
      //   'End of Day =>',
      //   endOfDay(new Date(searchValue))
      // )
      reservations = await Reservation.findAll({
        limit: 15,
        include: [{model: Camper}, {model: Campsite}],
        where: {
          [columnValue]: {
            [Op.between]: [
              startOfDay(new Date(searchValue)),
              endOfDay(new Date(searchValue))
            ]
          }
        }
      })
    } else {
      reservations = await Reservation.findAll({
        limit: 15,
        include: [{model: Camper}, {model: Campsite}],
        where: {
          [columnValue]: searchValue
        }
      })
    }

    res.status(200).json(reservations)
  } catch (err) {
    // console.log(err)
    next(err)
  }
})

router.post('/', async (req, res, next) => {
  const {
    campsiteId,
    startTime,
    endTime,
    partyNumber,
    firstName,
    lastName,
    email,
    totalCost,
    address,
    token
  } = req.body

  try {
    // Find or Create Camper
    const [camper, created] = await Camper.findOrCreate({
      where: {
        firstName,
        lastName,
        email
      },
      returning: true,
      plain: true
    })
    // TODO: Update Camper with billing address information

    // Find Campsite via ID
    const campsite = await Campsite.findById(campsiteId)

    // Book a reservation
    const newReservation = await Reservation.create({
      startTime,
      endTime,
      partyNumber,
      camperId: camper.id,
      campsiteId: campsite.id,
      totalCost
    })

    // Autogenerate Reservation ID
    const reservationNumber = `${address.billing_address_zip}${
      address.billing_address_state
    }${newReservation.id}${campsiteId}${partyNumber}`

    // Send email to dummy address
    // Generate SMTP service account from ethereal.email

    nodemailer.createTestAccount((err, account) => {
      if (err) {
        console.error('Failed to create a testing account. ' + err.message)
        return process.exit(1)
      }

      console.log('Credentials obtained, sending message...')

      const transporter = nodemailer.createTransport({
        // host: 'smtp.ethereal.email',
        // port: 587,
        service: 'gmail',
        auth: {
          user: process.env.EMAIL_USERID,
          pass: process.env.EMAIL_PASSWORD
          // user: 'dedkmcuyhxbpplax@ethereal.email',
          // pass: 'WHpBvYqrJ6WvtdRDzu'
        }
      })

      // Message object
      let message = {
        from: 'campsight.samillc@gmail.com',
        to: `${firstName + ' ' + lastName} <${email}>`,
        subject: `Confirmation for your CAMPSIGHT Reservation -#${reservationNumber}`,

        html: `<div>
          <p><b>Hello</b> ${firstName + ' ' + lastName},</p>
          <p> We at <strong>CAMPSIGHT</strong> a subsidiary of SAMI LLC do appreciate your business.</p>
          <p>
            Your reservation with ID <strong>#${reservationNumber}</strong> for campiste <strong>${campsite.name.toUpperCase()}</strong> cost a total sum of <strong><em>${formatPrice(
          totalCost
        )}</em></strong> with a 10% tax included. &nbsp;
          </p>
          <p> Your wonderful camping experience starts on <strong>${formatRelative(
            startTime,
            new Date()
          )}</strong> and ends on the next
          <strong>${formatRelative(endTime, startTime)}</strong>.
        </p>
          <p>Campsite <strong>${campsite.name.toUpperCase()}</strong> can be located on the MAP using its coordinates: <strong>${`Latitude:${
          campsite.location.coordinates[0]
        }, Longitude: ${campsite.location.coordinates[1]}`}</strong> </p>
          <p>
            We are looking forward to hosting you ...
          </p>
          <p>Your Sincerely, Campsight MGT.</p>
        <div>`
      }

      transporter.sendMail(message, (err, info) => {
        if (err) {
          console.log('Error occurred. ' + err.message)
          return process.exit(1)
        }

        console.log('Message sent: %s', info.messageId)
        // Preview only available when sending through an Ethereal account
        // console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info))
      })
    })

    res.status(201).json(newReservation)
  } catch (err) {
    next(err)
  }
})

module.exports = router
