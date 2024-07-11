const arr = [1,2,3,4,5];

for (const i of arr) {
    console.log(i);
}


const arr2 = ["fin", "gin", "din"];

for (const [key, val] of arr2) {
    console.log(key , val);
}


const myobj = {
    username: "nikhl",
    age: 19
}

// for (const [key , val] of myobj) {
//     console.log(key,val);
    
// } // it give error use for in loop

for (const key in myobj) {
    console.log(myobj[key]);
}


