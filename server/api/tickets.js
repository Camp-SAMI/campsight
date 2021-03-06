const router = require('express').Router()
const {Ticket, Camper, Reservation, Campsite} = require('../db/models')
const parseQueryToObject = require('../utils/parseQueryToObject');
// const requireAdmin = require('../auth/isAdmin')
// const requireStaffOrAdmin = require('../auth/isStafforAdmin')
module.exports = router

//all tickets route
router.get('/', async (req, res, next) => {
  try {
    let fieldTypes = await Ticket.describe();
    let queryParams = [];
    if (req.query.search){
      queryParams = req.query.search.split(',');
    }
    let queryObj = {};
    queryObj = parseQueryToObject(fieldTypes, queryParams);
    const tickets = await Ticket.findAll({
      where: {...queryObj},
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

router.get(`/search/:camperEmail`, async (req, res, next) => {
  const camperEmail = String(req.params.camperEmail)
  try {
    const campersTickets = await Ticket.findAll({
      where: {
        email: camperEmail
      }
    })
    // if (campersTickets.length) {
    // res.status(200).json(campersTickets)
    // } else {
    //   res.status(404)
    // }
    res.status(200).json(campersTickets)
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
    const [count, [updatedTicket]] = await Ticket.update(
      {
        title: req.body.title,
        email: req.body.email,
        content: req.body.content,
        priority: req.body.priority,
        status: req.body.status,
        image: req.body.image,
        location: req.body.location
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
router.delete('/:id', async (req, res, next) => {
  try {
    const ticketInfo = await Ticket.destroy({
      where: {id: req.params.id}
    })
    res.json(ticketInfo)
  } catch (err) {
    next(err)
  }
})
