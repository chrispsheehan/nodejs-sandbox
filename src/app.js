console.log("start");

setTimeout(() => {
    console.log("delayed by 2");
}, 2000)

function getUserVideos(email){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(callback(["thing1", "thing2", "thing3"]));
        }, 1000)
    })
}

function loginUser(email, password){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("delayed by 2");
            resolve(callback({userEmail: email}));
        }, 5000) 
    })
}

const user = loginUser("chris@you.me", "secret", (user) => {
    console.log(user);
    getUserVideos(user.email, videos => {
        console.log(videos)
    })
})

console.log("fin");