const request = require('supertest');


function getResponse(callback) {
    request('https://www.purgomalum.com/service')
        .get('/json?text=ass')
        .set('Accept', 'application/json')
        .expect(200)
        .then(response => {
            callback(response);
        });
};

function getResponseLog(callback) {
    
    getResponse(function(response) {
        callback(response);
    })
}


function fullFunction () {
    
    returnValue = "";
    
    getResponseLog(response => {
        console.log('result is ' + response.text);
        returnValue = response.text;
    });

    return returnValue;
}

const fullResult = fullFunction();

console.log('full result' + fullResult);

