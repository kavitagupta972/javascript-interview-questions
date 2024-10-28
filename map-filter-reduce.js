var arr = [5,2,3,6,7];

//MAP
var newArr = arr.map( x => x*2);

var binaryArr = arr.map( x => x.toString(2));

console.log(newArr);
console.log(binaryArr);
console.log(arr);

//FILTER
var evenArr = arr.filter( x => x%2 === 0);
console.log(evenArr);
console.log(arr);

var oddArr = arr.filter( x => x%2);
console.log(oddArr);
console.log(arr);


//REDUCE

var sumofArrElt = arr.reduce((acc, val) => acc * val, 10);
console.log(sumofArrElt);