// promoises



function regester (){
     return new Promise ((resolve ,reject)=>{
         setTimeout(function(){
             console.log("register");
             resolve();
         },1000)
     })
}
function sendmail (){
    return new Promise ((resolve ,reject)=>{
        setTimeout(function(){
            // return reject("error for not ");
            console.log("mail");
            resolve();
        },3000)
    })
}

function login (){
        return new Promise ((resolve ,reject)=>{
        setTimeout(function(){
            console.log("login");
            resolve()
        },1000)
    })
}


// regester()
// .then(sendmail)
// .then(login)
// .catch((err)=>{
//     console.log("error:", err );
// })


 async function authentication(){
   await regester();
   await sendmail();
   await login();

}

authentication();




console.log("hello");


