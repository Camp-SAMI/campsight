const router = require('express').Router()
module.exports = router

router.use('/users', require('./users'));
router.use('/campsites', require('./campsites'));
router.use('/campers', require('./campers'));
router.use('/reservations', require('./reservations'));
router.use('/amenities', require('./amenities'));
router.use('/tickets', require('./tickets'));

router.use((req, res, next) => {
  const error = new Error('Not Found')
  error.status = 404
  next(error)
})
