const request = require('supertest');
const { assert } = require("chai");

//basic
request('https://www.purgomalum.com/service')
    .get('/containsprofanity?text=ass')
    .expect(200) 
    //.expect(201)   
    .end(function(err, res) {
        if (err) throw err
        else console.log('no issues');
    });


//plain text
request('https://www.purgomalum.com/service')
    .get('/containsprofanity?text=ass')
    .set('Accept', 'text/plain')
    .expect(200)
    .then(response => {
        assert.equal(response.text, 'true');
        // assert.equal(response.text, 'false');        
        console.log('no issues')
    })