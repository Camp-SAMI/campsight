const {expect} = require('chai')
const db = require('../..')
const Amenity = db.model('amenity');

describe('Amenity model', () => {
    beforeEach(() => {
        return db.sync({force: true})
    });

    
})