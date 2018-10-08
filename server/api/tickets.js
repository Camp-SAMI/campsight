const router = require('express').Router()
const {Ticket, Camper, Reservation, Campsite} = require('../db/models')
const requireAdmin = require('../auth/isAdmin')
const requireStaffOrAdmin = require('../auth/isStafforAdmin')
module.exports = router

//all tickets route
router.get('/', async (req, res, next) => {
  try {
    const tickets = await Ticket.findAll({
      include: [{model: Reservation}]
    })
    res.json(tickets)
  } catch (err) {
    next(err)
  }
})

//single ticket route
router.get('/:id', async (req, res, next) => {
  try {
    const singleTicket = await Ticket.findOne({
      where: {
        id: req.params.id
      },
      include: [{model: Reservation}]
    })
    res.json(singleTicket)
  } catch (err) {
    next(err)
  }
})

//post ticket route
router.post('/', async (req, res, next) => {
  try {
    // const reservationInfo = await Reservation.findById(req.body.reservationId);
    //get get other pertinent info from form?
    let newTicket = await Ticket.create({
      title: req.body.title,
      email: req.body.email,
      content: req.body.content ? req.body.content : '',
      image: req.body.cameraData.selectedPic,
      location: req.body.cameraData.cameraCapturedData
    })
    res.json(newTicket)
  } catch (err) {
    next(err)
  }
})

//put ticket route, staff/admin only for now
// need to place in requireStaffOrAdmin, after creating a login
router.put('/:id', async (req, res, next) => {
  try {
    const updatedTicket = await Ticket.update(
      {
        title: req.body.title,
        email: req.body.email,
        content: req.body.content,
        priority: req.body.priority,
        status: req.body.status
      },
      {
        returning: true,
        where: {id: req.params.id}
      }
    )
    res.json(updatedTicket)
  } catch (err) {
    next(err)
  }
})

//delete ticket route, admin only
router.delete('/:id', requireAdmin, async (req, res, next) => {
  try {
    const ticketInfo = await Ticket.destroy({
      where: {id: req.params.id}
    })
    res.json(ticketInfo)
  } catch (err) {
    next(err)
  }
})
