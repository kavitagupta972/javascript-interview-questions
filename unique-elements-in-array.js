/**
 * Three different ways to find unique elements from array
 * using set
 * using array filter
 * using simple logic with for loop
*/
let Arr = [
    "A", "B",
    "D", "A",
    "C"];

/**
 * using set and array to find unique
 */
let uniqueArr = Array.from(new Set(Arr));
console.log("unique array from set ", uniqueArr);

/**
 * using array filter function to find unique elements
 */

uniqueArr = null;
uniqueArr = Arr.filter((item, index, arr) => {
    //for debugging purpose
    // console.log('item index arr -->', item, index, arr);
    return arr.indexOf(item) === index;
});

console.log("unique array from filter", uniqueArr);

/**
 * using for loop
 */

let index = 0;
uniqueArr = [];
for(index = 0; index < Arr.length; index++){
        if(!(uniqueArr.indexOf(Arr[index])>-1)){
            uniqueArr.push(Arr[index]);
        }
}

console.log("unique array from for loop", uniqueArr);