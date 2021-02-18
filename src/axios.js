const axios = require('axios');


// axios
//  .get("https://www.purgomalum.com/service/json?text=ass")
//  .then(function(response) {
//   console.log(response);
//  })
//  .catch(function(error) {
//   console.log(error);
//  });



function getBody() {
    return new Promise((resolve, reject) => {
      axios.get("https://www.purgomalum.com/service/json?text=ass")
      .then(function(response) {
        console.log(response.data)  
        return resolve(response.data);  
      }).catch(err => {
        return reject(err);
      });
    });
  }




async function getSomeBody() {
    let result = await getBody();
    console.log(result);
}

getSomeBody();




  