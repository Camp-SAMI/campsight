'use strict'
const {expect} = require('chai')
const { Campground, Campsite } = require('../');

describe('Campsite model', () => {
    it ('requires a name', async () => {
        const campground = await Campground.create({name: 'Camp Krusty', geolocation: {type: "Point", coordinates: [-86.7891234, 45.656789]}});
        const campsite = Campsite.build({location: {type: "Point", coordinates: [-86.7892235, 46.03452]}, campgroundId: campground.id});
        try {
            await campsite.validate();
            throw Error('validation is successful, but should have failed without `name`');
        } catch (err) {
            expect(err.message).to.contain('name cannot be null');
        }
    })
    it('requires a location', async () => {
        const campground = await Campground.create({name: 'Camp Krusty', geolocation: {type: "Point", coordinates: [-86.7891234, 45.656789]}});
        const campsite = Campsite.build({name:'G2', campgroundId: campground.id});
        try {
            await campsite.validate();
            throw Error('validation is successful, but should have failed without `location`');
        } catch (err) {
            expect(err.message).to.contain('location cannot be null');
        }
    })
    it('requires a campground', () => {
        it('requires a campground', async () => {
            const campsite = Campsite.build({name: 'G3', location: {type: "Point", coordinates: [-86.7892235, 46.03452]}});
            try {
                await campsite.validate();
                throw Error('validation is successful, but should have failed without a `campgroundId`');
            } catch (err) {
                expect(err.message).to.contain('campgroundId cannot be null');
            }
        })
    })
});