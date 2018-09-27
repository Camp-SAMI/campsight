const router = require('express').Router();
const { Campground, Campsite } = require('../db/models');

router.get('/', async (req, res, next) => {
    try {
        const campgrounds = await Campground.findAll({
            include: [{model: Campsite }]
        });
        res.json(campgrounds);
    }
    catch (err) {
        next(err);
    }
});

router.post('/', async (req, res, next) => {
    try {
        const newCampground = await Campground.create({
            name: req.body.name,
            geolocation: {
                type: 'Point',
                coordinates: [req.body.location.longitude, req.body.location.latitude]
            }
        });
        res.json(newCampground);
    }
    catch (err) {
        next(err);
    }
});

module.exports = router;