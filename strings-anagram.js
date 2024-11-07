let string1 = "kavita";
let string2 = "kavitaa";
let anagram = true;
if(string1.length != string2.length){
    console.log("not an anagram");
} else {
    let count = {};
    const length1 = string1.length;
    for(let i = 0; i<length1; i++){
        const c1 = string1[i];
        const c2 = string2[i];
        count[c1] = (count[c1] || 0) + 1;
        count[c2] = (count[c1] || 0) -1;


    }
    for(const c in count){
        if(count[c]){
            anagram = false;
        }
    }
    if(anagram) {
        console.log("anagram");
    } else{
        console.log("not an anagram");
    }
}

/**
 * with inbuilt functions
 */

const str1 = 'integrla'

const str2 = 'integral'

const st1 = str1.split('').sort().join('');
const st2 = str2.split('').sort().join('');

const item = st1 === st2;
const result = item ? 'Anagram' : 'Not anagram' ;
console.log(result);
