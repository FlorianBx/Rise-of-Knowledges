const chai = require('chai');
const chaiHttp = require('chai-http');

const server = require('../server');
const assert = chai.assert;

chai.use(chaiHttp);

suite('Testing quizz api', function() {
    // testing the get quiz for language
    test('Test the getQuizz route in all lang', function() {
        ['fr', 'en', 'es', 'nl', 'de', 'it'].map(value => {
            chai.request(server)
            .get('/getQuizz/' + value)
            .end(function(err,res) {
                assert.equal(err, null, 'err should be null');
                assert.equal(res.status, 200, 'res.status should be equal to 200');
                assert.equal(res.type, 'application/json', 'res should be type of array');
                assert.include(res.text, value, 'res lang should be fr');
            })
        })
    })

    test('test the getQuizz when the lang is different than what it should', function() {
        ['test', 21, null, undefined, 'en', 'z'].map(value => {
            chai.request(server)
            .get('/getQuizz/' + value)
            .end(function(err, res) {
                assert.equal(err, null, 'err should be null');
                assert.equal(res.status, 200, 'res.status should be equal to 200');
                assert.equal(res.type, 'application/json', 'res should be type of array');
                assert.equal(res.body[0].lang, 'en', 'lang should be en');
            })
        })
    })
})