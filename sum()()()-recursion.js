console.log("writing program to execute sum(1)(2)(3)(4).....()")


var sum = function(a) {
    return function(b){
        return function(){
            return a+b;
        };
    }
}

var sum1 = function(a) {
    return function(b){
        return b ? sum1(a+b) : a;
//         if(b){
//              return sum1(a+b);
//         } else{
//             return a;
//         }
       
    }
}
//with es6
var sumES6 = a => b => b ? sumES6(a+b) : a;

console.log(sumES6(1)());
//console.log(sum(1)(2)());
console.log(sumES6(1)(2)(3)(4)(5)());
