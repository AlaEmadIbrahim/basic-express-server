'use strict';

const server = require('../src/server');
const supertest = require('supertest');
const req = supertest(server.app); 


describe('Validate the User Name', () => {
    test('Getting user name from /person route', async () => {
        let regex = /^[A-Za-z]{1,29}$/i;
        const res = await req.get('/person?name=ala');
        expect(res.status).toEqual(200);
        expect(res.body).toEqual({ "name": "ala" });
        expect(typeof res.body).toEqual('object');
        expect('Ahmad').toMatch(regex);
        expect("ala").toMatch(regex);
        expect('moh77').toEqual(expect.not.stringMatching(regex));
        expect('zaid!!').toEqual(expect.not.stringMatching(regex));
    });
})