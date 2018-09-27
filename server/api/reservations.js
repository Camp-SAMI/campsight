const router = require('express').router();
const { Reservation, Camper, Campsite } = require('../db/models');

router.get('/', async (req, res, next) => {
    try {
        const reservations = await Reservation.findAll({
            include: [{model: Camper}, {model: Campsite}]
        });
        res.json(reservations);
    }
    catch (err) {
        next(err);
    }
});

router.get('/:id', async (req, res, next) => {
    try {
        const reservation = await Reservation.findById(req.params.id, {
            include: [{model: Camper}, {model: Campsite}]
        });
        res.json(reservation);
    }
    catch (err) {
        next(err);
    }
});

router.post('/', async (req, res, next) => { //written under the assumption that the user info is on the same form as on the actual reservation info
    try {
        const camper = await Camper.findOrCreate({
            where: [
                {firstName: req.body.firstName},
                {lastName: req.body.lastName},
                {email: req.body.email}
            ],
            returning: true
        });
        const campsite = await Campsite.findById(req.body.campsiteId);
        const newReservation = await Reservation.create({
            startTime: req.body.startTime,
            endTime: req.body.endTime,
            partyNumber: req.body.partNumber,
            camperId: camper.id,
            campsiteId: campsite.id
        });
        res.json(newReservation);
    }
    catch (err) {
        next(err);
    }
})

module.exports = router;