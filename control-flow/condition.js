// if 

// if(false){
//     // code not exexute
// }

// if(ture){
//     //code execute
// }

// <,>,<=,>=, ==, ===





// check scopes
const score = 100;
if(score < 200){
    const power = "fly"
    console.log(`user power is ${power}`);
}

//not ecexut outer 
// console.log(`user power is ${power}`);








// short hand notation 
const balance = 200;
if (balance < 300) console.log("test"); 



// **********************************************


if(balance > 50){
    console.log("less than 50");

}
else if(balance>100){
    console.log("less than 100");
}
else{
 console.log("not");
}



// swith case


//  stntax

// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

const month = 2

switch (month) {
    case 1:
        console.log("january");   
        break;
    case 2:
        console.log("febuary");   
        break;
    case 3:
        console.log("march");   
        break;
    case 4:
        console.log("april");   
        break;

    default:
        console.log("default");
        break;
}

// truthhy or falsehy

const username = "0"

if(username){
    console.log("turu");
} else{
    console.log("false");
}


// falseey value

// false , 0, -0, BigInt on, "",null, undefined ,nan

// truly value 
// "0" , 'false' ,[], {}, function(){}





// nulish  coalescing operator (??): null undefinned
let val1;
// val1 = 5 ?? 10;

// val1 = null ?? 10
val1 = undefined ?? 2
console.log(val1);



// turnery operatot

// condition ? ture : false

const iceprice = 100;
iceprice >= 20 ? console.log("maghi ha "): console.log("sasti ha");
