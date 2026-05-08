// closures concept
//A closure gives access to variables from an outer function even after the outer function has executed.
//https://medium.com/deno-the-complete-reference/10-use-cases-of-closures-in-javascript-98fe0eab36db
function outer () {
    let outerVar = 100;
    return function inner() {
        outerVar++;
        return outerVar;
    }
}
var fun = outer();
console.log(fun());
console.log(fun());
console.log(fun());
console.log(fun());