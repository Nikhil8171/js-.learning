//************ DOM SELECTORS ************
// 1. getElementsByTagName
// it gives html collection

const tagname = document.getElementsByTagName('h1');
console.log(tagname);
console.log(tagname.length);
console.log(tagname.namedItem);

// 2. getElementById

const id = document.getElementById('main');
console.log(id);


// 3. getElementsByClassName


const clas = document.getElementsByClassName('cls');
console.log(clas);




// 4. querySelector


const id2 = document.querySelector('#ul');
console.log(id2);

// 5. querySelectorAll
 
const node = document.querySelectorAll('li')
console.log(node);

// ---------------------------------------
// Storing data in variables
