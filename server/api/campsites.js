const router = require('express').Router();
const { Campsite, Amenity, Reservation, Campground } = require('../db/models');

router.get('/', async (req, res, next) => {
    // commented out variables are for when we cover query params.
    // const startTime = req.query.startTime;
    // const endTime = req.query.endTime;
    // const amenities = req.query.amenities;
    try {
        const campsites = await Campsite.findAll({
            include: [{model: Amenity}, {model: Reservation}]
        });
        res.json(campsites);
    }
    catch (err) {
        next(err);
    }
});

router.get('/:campsiteId', async (req, res, next) => {
    try {
        const target = await Campsite.findById(req.params.campsiteId, {
            include: [{model: Amenity}, {model: Reservation}]
        });
        res.json(target);
    }
    catch (err) {
        next(err);
    }
})

router.post('/', async (req, res, next) => {
    try {
        const newCampsite = await Campsite.create({
            location : {
                type: 'Point',
                coordinates: [req.body.location.longitude, req.body.location.latitude]
            },
            campgroundId: req.body.campgroundId,
            coverImage: req.body.coverImage ? req.body.coverImage : '',
            images: req.body.images.length ? req.body.images : [],
            typing: req.body.typing
        });
        res.json(newCampsite);
    }
    catch (err) {
        next(err);
    }
})

router.update('/:campsiteId', async (req, res, next) => {
    try {
        const campsiteUpdate = await Campsite.update(req.body, {
            where: { id: req.params.campsiteId },
            returning: true
        });
        res.json(campsiteUpdate);
    }
    catch (err) {
        next(err);
    }
})
module.exports = router;