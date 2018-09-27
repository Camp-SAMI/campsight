const {expect} = require('chai');
const db = require('../..');
const Camper = db.model('camper');
const Campground = db.model('campground');
const Campsite = db.model('campsite');
const Reservation = db.model('reservation');