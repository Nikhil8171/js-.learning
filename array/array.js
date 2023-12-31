// array 

const number = [1,2,3,4];
console.log(number);

const num = new Array ( 1,2,4,5)
// console.log(num[2]);

// array methids 
number.push(5);
console.log(number);

number.pop();
console.log(number);

number.unshift(4);
console.log(number);

number.shift(4);
console.log(number);

const br = [3 ,5 ,45,4];

const nr = br.slice(1, 3);
console.log(nr);

const nr1 = br.splice(1, 3);
console.log(nr1);