let arr = [3,4,5,2,4,];

arr.map((val) => {
    // console.log(val);
});


//filter methods 

let newarr = arr.filter((val) => {
    return val % 2 == 0;

});

// console.log(newarr);

// redused
let arr1=[3,4,5,6,7,4];
let sum = 0;
const output = arr1.reduce((res,val) => {
   return res + val; 
});

// console.log(output);


//practice


const marks = [50,99,90,93,45,34];

const studensmarks = marks.filter((val,idx) => {
    return val >= 90;
})

// console.log(studensmarks);



// 

let n = prompt("enter a number ");

let arr4 = [];
for(let i=1; i<n; i++){
    arr4[i-1] = i;
}
console.log(arr4);

 const sum1 = arr4.reduce((prev, curr)=>{
    return prev + curr
})

console.log(sum1);