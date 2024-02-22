const promiseone = new Promise(function(resolve,reject){
    setTimeout(() => {
        console.log("async task 2");
        resolve();
    }, 1000);
}).then(() => {
 console.log("task consume");
})


 const promisetwo = new Promise(function(resolve,reject){
    setTimeout(() => {
        console.log("async task resolve");
        resolve({user: "nikhil" , email:"chai@mail.com"});
    }, 1000);
})

promisetwo.then((user) => {
     console.log(user);
})

const promisethree = new Promise(function(resolve,reject){
    setTimeout(() => {
       let error  = false
       if(!error){
        resolve({username: "nikhil" , email:"chai@mail.com"})
       }
       else{
        reject("303")
       }
    }, 1000);
})

promisethree
.then((user) => {
    console.log(user);
    return user.username;
})
.then((username) =>{
  console.log(username);
})
.catch((error) => { 
    console.log(error);

})
.finally(() => {
    console.log('the promise is true or false');
})

// usong async await 
const promisefour = new Promise(function(resolve,reject){
    setTimeout(() => {
       let error  = false
       if(!error){
        resolve({username: "javascript" , email:"chai@mail.com"})
       }
       else{
        reject("went wrong")
       }
    }, 1000);
})


async function consume (){
  try{
    const response = await promisefour
    console.log(response);
  } catch (erroe){
    console.log(erroe);
  }
}

consume();


// async function getdata (){
//     try {
//         const response =  await fetch('https://api.github.com/users/hiteshchoudhary')
//         const data = await response.json()
//         console.log(data);

//     } catch (error) {
//         console.log("e:",error);
//     }
// }

// getdata();

fetch ('https://api.github.com/users/hiteshchoudhary')
.then((response) => {
   return response.json()
})
.then((data)=>{
    console.log(data);
})
.catch((error)=>{
console.log('e',error);
})