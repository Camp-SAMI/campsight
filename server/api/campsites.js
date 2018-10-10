const router = require('express').Router()
const {Campsite, Amenity, Reservation, Campground} = require('../db/models')

router.get('/', async (req, res, next) => {
  try {
    const campsites = await Campsite.findAll({
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
      cost: req.body.cost,
    })
    let amenItems = req.body.amenities.map(amen => amen.toLowerCase())
    const amenities = await Amenity.findAll()
    const amenityInfos = amenities.filter(a => amenItems.includes(a.category))
    await newCampsite.setAmenities(amenityInfos)
    await newCampsite.save()
    res.json(newCampsite)
  } catch (err) {
    next(err)
  }
})

router.put('/:campsiteId', async (req, res, next) => {
  try {
    const [count, [campsiteUpdate]] = await Campsite.update({
      name: req.body.name,
      location: {
        type: "Point",
        coordinates: [req.body.latitude, req.body.longitude]
      },
      coverImage: req.body.coverImage ? req.body.coverImage: '',
      images: req.body.images,
      typing: req.body.typing,
      cost: req.body.cost
    }, {
      where: {id: req.params.campsiteId},
      returning: true
    });
    let amenItems = req.body.amenities.length ? req.body.amenities.map(amen => amen.toLowerCase()) : [];
    const amenities = await Amenity.findAll()
    const amenityInfos = amenities.filter(a => amenItems.includes(a.category))
    await campsiteUpdate.setAmenities(amenityInfos);
    await campsiteUpdate.save();
    // const updatedCamp = await Campsite.findById(campsiteUpdate.id, {include: [{model: Amenity}]});
    // console.log('update', updatedCamp.amenities);
    res.json(campsiteUpdate);
  } catch (err) {
    next(err)
  }
})
module.exports = router
