'use strict'

const {expect} = require('chai');
const {Amenity} = require('../');

describe('Amenity model', () => {
    it('requires type', async () => {
        const amenity = Amenity.build();
        try {
            await amenity.validate();
            // console.log('amenity', amenity);
            throw Error(
                'validation was successful but should have failed without `type`'
            )
        } catch (err) {
            expect(err.message).to.contain('type cannot be null');
        }
    })
})