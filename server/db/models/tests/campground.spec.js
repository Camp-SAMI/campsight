'use strict';

const {expect} = require('chai');
const {Campground} = require('../');

describe('Campground model', () => {
    it('requires a name', async () => {
        const campground = Campground.build({gelocation: {type: "Point", coordinates: [-87.6239965933, 30.8974456]}});
        try {
            await campground.validate();
            throw Error('validation successful but should have failed without `name`');
        } catch (err) {
            expect(err.message).to.contain('name cannot be null');
        }
    })
    it('requires a geolocation', async() => {
        const campground = Campground.build({name:'Camp Krusty'});
        try {
            await campground.validate();
            throw Error('validation was successful but should have failed without `geolocation`');
        } catch (err) {
            expect(err.message).to.contain('geolocation cannot be null');
        }
    })
})