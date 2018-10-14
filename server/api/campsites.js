const router = require('express').Router()
const {Campsite, Amenity, Reservation} = require('../db/models')
const Op = require('sequelize').Op

router.get('/', async (req, res, next) => {
  try {
    const campsites = await Campsite.findAll({
      limit: 75,
      include: [{model: Amenity}, {model: Reservation}]
    })
    res.json(campsites)
  } catch (err) {
    next(err)
  }
})

router.get('/:campsiteId', async (req, res, next) => {
  try {
    const target = await Campsite.findById(req.params.campsiteId, {
      include: [{model: Amenity}, {model: Reservation}]
    })
    res.json(target)
  } catch (err) {
    next(err)
  }
})

router.post('/', async (req, res, next) => {
  try {
    const amenities = await Amenity.findAll({
      where: {category: {[Op.in]: req.body.amenities}},
      include: [{model: Campsite}]
    })
    const newCampsite = await Campsite.create({
      name: req.body.name,
      location: {
        type: 'Point',
        coordinates: [req.body.latitude, req.body.longitude]
      },
      campgroundId: req.body.campgroundId,
      coverImage: req.body.coverImage ? req.body.coverImage : '',
      images: req.body.images.length ? req.body.images : [],
      typing: req.body.typing,
      cost: req.body.cost
    })
    await newCampsite.addAmenities(amenities)
    await newCampsite.save()
    let nCamp = await Campsite.findOne({
      where: {id: newCampsite.id},
      include: [Amenity]
    })
    res.json(nCamp)
  } catch (err) {
    next(err)
  }
})

router.put('/:campsiteId', async (req, res, next) => {
  try {
    const amenities = await Amenity.findAll({
      where: {category: {[Op.in]: req.body.amenities}},
      include: [{model: Campsite}]
    })
    await Campsite.update(
      {
        name: req.body.name,
        location: {
          type: 'Point',
          coordinates: [req.body.latitude, req.body.longitude]
        },
        coverImage: req.body.coverImage ? req.body.coverImage : '',
        images: req.body.images,
        typing: req.body.typing,
        cost: req.body.cost
      },
      {
        where: {id: req.params.campsiteId},
        returning: true
      }
    )
    let campo = await Campsite.findById(req.params.campsiteId, {
      include: [{model: Amenity}]
    })
    await campo.setAmenities(amenities)
    await campo.save()
    res.json(campo)
  } catch (err) {
    next(err)
  }
})
module.exports = router
