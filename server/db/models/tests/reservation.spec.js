'use strict'

const {expect} = require('chai')
const {Camper, Campground, Campsite, Reservation} = require('../')

describe('Reservation model', () => {
  let camper
  let campground
  let campsite
  beforeEach(async () => {
    camper = await Camper.create({
      firstName: 'Mister',
      lastName: 'Men',
      email: 'mrmen@mmm.com'
    })
    campground = await Campground.create({
      name: 'Camp Krusty',
      geolocation: {type: 'Point', coordinates: [-86.7891234, 45.656789]}
    })
    campsite = await Campsite.create({
      name: 'G4',
      location: {type: 'Point', coordinates: [-86.7892235, 46.03452]},
      campgroundId: campground.id
    })
  })
  it('requires a startTime', async () => {
    const reservation = Reservation.build({
      endTime: Date.now() + 3,
      camperId: camper.id,
      campsiteId: campsite.id
    })
    try {
      await reservation.validate()
      throw Error(
        'validation is successful, but should have failed without `startTime`'
      )
    } catch (err) {
      expect(err.message).to.contain('startTime cannot be null')
    }
  })
  it('requires an endTime', async () => {
    const reservation = Reservation.build({
      startTime: Date.now() + 1,
      camperId: camper.id,
      campsiteId: campsite.id
    })
    try {
      await reservation.validate()
      throw Error(
        'validation is successful, but should have failed without `endTime`'
      )
    } catch (err) {
      expect(err.message).to.contain('endTime cannot be null')
    }
  })
  it('requires a camperId', async () => {
    const reservation = Reservation.build({
      startTime: Date.now() + 1,
      endTime: Date.now() + 3,
      campsiteId: campsite.id
    })
    try {
      await reservation.validate()
      throw Error(
        'validation is successful, but should have failed without `camperId`'
      )
    } catch (err) {
      expect(err.message).to.contain('camperId cannot be null')
    }
  })
  it('requires a campsiteId', async () => {
    const reservation = Reservation.build({
      startTime: Date.now() + 1,
      endTime: Date.now() + 3,
      camperId: camper.id
    })
    try {
      await reservation.validate()
      throw Error(
        'validation is successful, but should have failed without `campsiteId`'
      )
    } catch (err) {
      expect(err.message).to.contain('campsiteId cannot be null')
    }
  })
})
