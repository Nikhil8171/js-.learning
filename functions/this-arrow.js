const user  = {
 userName: "nikhil",
 price: 999,

 welcomeMassage: function(){
    console.log(`${this.userName} , welcone to website`);
 }

}
// user.welcomeMassage();
// user.userName = "sam";
// user.welcomeMassage();

// const chai = function ar() {
//     let username = "nikhil"
//     console.log(this.username);
// }
// chai();

//  ar = () => {
//     let username = "nikhil"
//     console.log(this.username);
//  }
//  ar ();


// arrow 

// const add =( parameter) =>{
//  return parameter
// }

// console.log(add(4));


// inplisite return

const add = (para) => (para)

console.log(add(5));