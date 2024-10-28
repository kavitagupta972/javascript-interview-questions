var str = 'I am a javascript developer';

var reverseStr = str.split('').reverse().join('');
console.log("reverse string using inbuilt functions". reverseStr);
reverseStr = '';

for(var i= str.length-1; i >=0; i--){
    reverseStr += str[i]; 
}

console.log("reverse string without using inbuilt functions". reverseStr);
