const formatRelative = require('date-fns/formatRelative')
const nodemailer = require('nodemailer')
const router = require('express').Router()
const {Reservation, Camper, Campsite} = require('../db/models')
const isAdmin = require('../auth/isAdmin')
const isStaffOrAdmin = require('../auth/isStafforAdmin')
const formatPrice = require('../utils/formatPrice')

router.get('/', async (req, res, next) => {
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
        host: 'smtp.ethereal.email',
        port: 587,
        auth: {
          user: 'dedkmcuyhxbpplax@ethereal.email',
          pass: 'WHpBvYqrJ6WvtdRDzu'
        }
      })

      // Message object
      let message = {
        from: 'SAMI LLC <campsight@samillc.com>',
        to: `${firstName + '' + lastName} <${email}>`,
        subject: `Confirmation of your Reservation -#${reservationNumber}`,

        html: `<div>
          <p><b>Hello</b> to ${firstName + '' + lastName}!</p>
          <p> We at Campsight as subsidiary of SAMI LLC appreciate your business
          and would like to thank you for doing business worth
          ${formatPrice(totalCost)} &nbsp; today.</p>
          <p>
            Your reservation <strong>#${reservationNumber}</strong> for campiste <strong>${
          campsite.name
        }</strong>
            begins on <strong>${formatRelative(
              startTime,
              new Date()
            )}</strong> and ends on the next
            <strong>${formatRelative(endTime, startTime)}</strong>.
          </p>
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
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info))
      })
    })

    res.status(201).json(newReservation)
  } catch (err) {
    next(err)
  }
})

module.exports = router
