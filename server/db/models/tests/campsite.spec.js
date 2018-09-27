const {expect} = require('chai')
const db = require('../..')
const Campground = db.model('campground')
const Campsite = db.model('campsite')