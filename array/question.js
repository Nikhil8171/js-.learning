const arr = [3,5,34,3];
console.log(arr);

for(let i=0; i<arr.length; i++){
    console.log(arr[i]);
}


// find the avrage

const arr2 = [85,97,44,37,76,60];

let sum = 0;
for(let i =0; i<arr2.length; i++){
    sum += arr2[i];
}
const avr = sum/arr2.length;
console.log(avr);



// print the value after appling ofers

const items = [250,664,300,900,50];
 let i=0;
for(let val of items){
    
    console.log(`the actual price is ${val} `);
    const offer = val/10;
    
    items[i] = items[i] - offer;
    
    console.log(`After the discount is ${items[i]}`);
    i++;
}