//calll back hell



function regester (callback){
    setTimeout(function(){
        console.log("register");
        callback();
    },1000)
}
function sendmail (callback){
    setTimeout(function(){
        console.log("mail");
        callback();
    },3000)
}
function login (){
    setTimeout(function(){
        console.log("login");
    },1000)
}


regester(function(){
    sendmail(function(){
        login();
    });
})
console.log("hello");


