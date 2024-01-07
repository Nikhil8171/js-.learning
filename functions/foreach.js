let arr = [2,3,4,6,4];

arr.forEach(function print (val){
    console.log(val);
})




// using arrow functions 
let arr1 = [1,32,43,65,64];
let str =["nikhil", "Delhi","ayudha",]

str.forEach((val) => {
 console.log(val.toUpperCase());
})



// there are three types of parameters
// 1 is val , ind , arr
arr1.forEach((val, idx , str ) => {
    console.log(`valus is ${val}, idx is ${idx}, arr is ${str}`);
});





// square if each value 

let arr3 = [ 3,4,5,3,3];

arr3.forEach(function square(val){
    console.log(val*val);
})