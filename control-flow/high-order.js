// for of 

// [ "","",""]
// [{},{},{}]





// const arr = [1,2,3,4,5]
// for (const i of arr) {
//     console.log(i);
// }




const str = "hello world"
for (const st of str) {
    // console.log(st);
}



// map 

const map = new Map()
map.set('in',"india")
map.set('usa',"adl")
map.set('in',"india")


console.log(map);

for (const [key , value] of map) {
    console.log(key, value);
}

// /map is  not itterate object

const myobj = {
    game1: "spiderman",
    game2: 'sony',
}
// for (const [i ,value] of myobj) {
//     console.log(i,value);
// }

// TypeError: myobj is not iterable

// use for in loop am                                                               object

for(const key in myobj){
    console.log(myobj[key]);
}


// for each loop

const coding = ["js","djh","dsh"]
coding.forEach(function (params) {
    // console.log(params);
}) 

coding.forEach((val) => {
console.log(val);
})



////////////////////////


function printme (item,index, arr){
  console.log(item,index,arr);
}

coding.forEach( printme);


// we can acces object using for each
// for each not return value


// filter

const myNums = [ 1,2,3,4,5,6,7,8,9,10]
// const newNums = myNums.filter((nums) =>{
//      return nums > 4
// })

// console.log(newNums);

const newNums1 = []
   myNums.forEach((nums)=>{
   if(nums > 4){
    newNums1.push(nums)
   }
})

console.log(newNums1);


// map

const myNumber = [1,2,3,4,5,6,7,8,9,10]
const newNumber = myNumber.map((nums)=> ( nums +10 ))
console.log(newNumber);