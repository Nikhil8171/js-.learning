function sum(num1 , num2 ){
return (num1 + num2);
}
// let sum1 = sum(3,5);
console.log(sum(3,6));

// arrow function
 const arrowmul = ( a , b) =>{
    console.log(a*b);
};

// arrowmul(3,6);
function countvovels (str){
    let count = 0;
    for(let char of str){
        if(char === "a" || char === "e"|| char === "i" || char === "o" || char === "u"  )
        {
            count++;
         }
    }
    //  console.log(count);
    // return count;
}

// countvovels("hellio");
// console.log(countvovels("hellii"));

// using arrow functions

const countvovel = (str)=>{
    let count = 0;
    for(let i=0; i<=str.length; i++){
        if(str[i]==="a" || str[i]==="e" || str[i]==="i" || str[i]==="o" || str[i]==="u"){
            count++;
        }
    }
    return count;
};

console.log(countvovel("helloi"));