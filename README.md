# javascript-interview-questions
This repo contains javascript interview questions

1. Difference betweeen shallow and deep copying.(with example)
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
6. https://www.mathsisfun.com/puzzles/weighing-10-bags-solution.html.  -- puzzle
7. Create prime number optimal function and how to add that function in prototype
8. Create a function which will return a object with count of every char in a given string. e.g. in "Hello" =>"H" -> 1, "e" -> 1, "l" -> 2, "o" -> 1
9. what is event loop.
10. what is a closure and what is the need of closure.
11. use of setinterval and settimeout with example.
