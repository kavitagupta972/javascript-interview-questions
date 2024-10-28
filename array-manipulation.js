var arrayList = ['a', 'b', 'c', 'd', 'e', 'f']; // Created array
var anotherArrayList = arrayList;  // Referenced arrayList by another variable
arrayList.length = 0; // Empty the array by setting length to 0
console.log(anotherArrayList);
var numArr = [1,2,3,4,5,6];
var newArr;
newArr = numArr.at(3);
console.log('at' , newArr);
newArr = numArr.pop();
console.log('pop', newArr);
newArr = numArr.push(8);
console.log('push', newArr);
newArr = numArr.reverse();
console.log('reverse',newArr);
newArr = numArr.fill(10);
console.log('fill', newArr);
newArr = numArr.join("-");
console.log('join', newArr);
newArr = numArr.shift();
console.log('shift',newArr);
newArr = numArr.unshift(3);
console.log('unshift', newArr);

newArr = numArr.includes(5);
console.log('includes',newArr);
newArr = numArr.map((e) => (e+10));
console.log('map', newArr);
newArr = numArr.find(num=>num>3);
console.log('find', newArr);
newArr = numArr.filter(num=>num>3);
console.log('filter', newArr);
newArr = numArr.every( num => num>5);
console.log('every', newArr);
newArr = numArr.findIndex( num => num>4);
console.log('findIndex', newArr);
newArr = numArr.reduce( (acc,num) => acc+num, 0);
console.log('reduce', newArr);
