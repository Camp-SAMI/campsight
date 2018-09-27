const router = require('express').Router();
const { Amenity } = require('../db/models');

router.get('/', async (req, res, next) => {
    try {
        const amenities = await Amenity.findAll();
        res.json(amenities);
    } catch(err) {
        next(err);
    }
});

router.post('/', async (req, res, next) => {
    try {
        let newAmenity = await Amenity.create({ catgegory: req.body.category });
        res.json(newAmenity);
    }
    catch (err) {
        next(err);
    }
});

module.exports = router;