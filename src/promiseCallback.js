///https://www.youtube.com/watch?v=DHvZLI7Db8E

const { get, agent } = require("superagent")

let p = new Promise((resolve, reject) => {
    let a = 1 + 1

    if(a == 2) {
        resolve('great success :)')
    }else {
        reject('failed :(')
    }
})

p.then((message) => {
    console.log('this is something ' + message)
}).catch((message) => {
    console.log('error' + message) 
})


const request = require('supertest');

// with callback
function getResponse(url) {
    
    return request(url)
        .get('/json?text=ass')
        .set('Accept', 'application/json')
        .expect(200)
}


function getReplacedText() {

    return getResponse('https://www.purgomalum.com/service');  
}

function getReplacedTextBodyResult(something) {
    
    console.log(something);

    getReplacedText()
    .then(response => {
        console.log(response.body)
        return response.body.result;
    })
    .catch(error => {
        console.log('error is ' + error)
    })
}

//https://stackoverflow.com/questions/11782453/class-methods-in-node-js


getReplacedTextBodyResult('adsasas', result => {
    console.log('result' + result);
})




