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

//json
request('https://www.purgomalum.com/service')
    .get('/json?text=ass')
    .set('Accept', 'application/json')
    .expect(200)
    .then(response => {
        //assert.equal(response.body.result, 'ass');     
        assert.equal(response.body.result, '***');        
        console.log('no issues')
    }) 


// with callback
function getResponse(callback) {
    request('https://www.purgomalum.com/service')
        .get('/json?text=ass')
        .set('Accept', 'application/json')
        .expect(200)
        .then(response => {
            callback(response);
        }) 
} 

getResponse(response => {
        console.log(response.text);
    });

var keyVar = 'text';

//keyvalue pair params
request('https://www.purgomalum.com/service')
    .get('/containsprofanity?')
    .query({[keyVar]: "ass"})
    .set('Accept', 'text/plain')
    .expect(200)
    .then(response => {
        assert.equal(response.text, 'true');
        // assert.equal(response.text, 'false');        
        console.log('no issues kp params')
    })


// with promises
function getBody() {
    return new Promise((resolve, reject) => {
        request('https://www.purgomalum.com/service')
        .get('/containsprofanity?')
        .query({[keyVar]: "ass"})
        .set('Accept', 'text/plain')
        .expect(200)
        .then(response => {
            return resolve(response.text);
        })
        .catch(err => {
            return reject(err);
        });
    });
  }

async function getSomeBody() {
    let result = await getBody();
    console.log('blah blah' + result);
}

getSomeBody();