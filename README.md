# javascript-interview-questions
This repo contains javascript interview questions

1. Difference betweeen shallow and deep copying.
2. Add element in array in starting and end position.
3. Newly added features in es6.
4. String is palindrome or not 

var str = 'ABCDcBA';
var str1 = 'ABCDkjdkf';

var strArr = str.split('');

var strLength = str.length;
var isPalindrome = true;
for (let i = 0; i < strLength / 2; i++) {
  if (strArr[i].toUpperCase !== strArr[strLength - i - 1].toUpperCase) {
    isPalindrome = false;
  }
}
if (isPalindrome) {
  console.log(str + ' is palindrome');
} else {
  console.log(str + ' is not palindrome');
}
5. Reverse a linkedlist
