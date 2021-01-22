const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("yo")
        resolve({user: "ed"});
        //reject(new Error('random message'));
    }, 2000);
})

promise.then(user => {
    console.log(user);
}).catch(err => console.log(err));