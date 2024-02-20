const promise1 = new Promise((resolve , reject) => {
    // do async task 
    setTimeout(function(){
        console.log('do async');
        resolve()
    }, 1000)
})

promise1.then(function(){
    console.log('consume');
})

const Promisethree = new Promise((resolve,reject) => {
 setTimeout(function(){
    resolve({username: "chai", email:"chai@example.com"})
 }, 5000)
})
Promisethree.then(function(user){
    console.log(user);
})