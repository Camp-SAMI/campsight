const router = require('express').Router()
const {Amenity, Campsite} = require('../db/models')

router.get('/', async (req, res, next) => {
  try {
    const amenities = await Amenity.findAll()
    res.json(amenities)
  } catch (err) {
    next(err)
  }
})

router.get('/:amenityId', async (req,res,next)=>{
  const amenityId = req.params.amenityId
  try{
    const amenities = await Amenity.findAll({
      include: [{model: Campsite}],
      where:{id: amenityId}
    }) 
    res.json(amenities)
  } catch(err){
    next(err)
  }
})

router.post('/', async (req, res, next) => {
  try {
    let newAmenity = await Amenity.create({catgegory: req.body.category})
    res.json(newAmenity)
  } catch (err) {
    next(err)
  }
})

module.exports = router



// to set up api route
// router.get('/:categoryId', async (req, res, next) => {
//   const categoryId = req.params.categoryId
//   try {
//     const categories = await Category.findAll({
//       include: [{model: Product}],
//       where: {id: categoryId}
//     })
//     res.json(categories)
//   } catch (err) {
//     next(err)
//   }
// })
