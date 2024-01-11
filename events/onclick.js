// bad way 2 

// const secondbtn = document.querySelector('.second-btn');
// secondbtn.onclick = function (){
//   console.log("hello nikhil");
// }

// secondbtn.onmousemove = function (){
//   console.log("hello nikhil");
// }

//great way 

const great =  document.querySelector('.best');
// great.addEventListener("click", function () {
//   console.log("hello world ");
  
// });

function best  (){
console.log("onclick calaga");
}

great.addEventListener("click",best);