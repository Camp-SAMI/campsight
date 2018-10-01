'use strict'

const {expect} = require('chai');
const {Camper} = require('../');

describe('Camper model', () => {
    it('requires first name', async () => {
        const camper = Camper.build({lastName: 'Smith', email:'abc@example.com'});
        try {
            await camper.validate();
            throw Error('validation was successful but should have failed without `firstName`');
        } catch (err) {
            expect(err.message).to.contain('firstName cannot be null')
        }
    })
    it('requires lastName', async () => {
        const camper = Camper.build({firstName: 'Hugh', email: 'abc@example.com'});
        try {
            await camper.validate();
            throw Error('validation was successful but should have failed without `lastName`');
        } catch (err) {
            expect(err.message).to.contain('lastName cannot be null')
        }
    })
    it('requires email', async () => {
        const camper = Camper.build({firstName: 'Hugh', lastName: 'Jass'});
        try {
            await camper.validate();
            throw Error('validation was successful but should have failed without `email`');
        } catch (err) {
            expect(err.message).to.contain('email cannot be null');
        }
    })
    // it('email must be a legit email', async () => {

    // });
});