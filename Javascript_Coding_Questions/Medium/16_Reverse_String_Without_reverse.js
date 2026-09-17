// Question: Reverse a string without using the built-in reverse() method.
//
// Write a function that takes a string as input and returns the reversed string
// without using Array.prototype.reverse().
//
// Example 1:
// Input: "hello"
// Output: "olleh"
//
// Example 2:
// Input: "JavaScript"
// Output: "tpircSavaJ"
//
// Example 3:
// Input: "madam"
// Output: "madam"

function reverseString(str) {
    let reversed="";
    for(let i=str.length-1;i>=0;i--){
        reversed+=str[i];
    }
    return reversed;
}
// Time: O(n): We visit every character once.
// Space: O(n): We create a new reversed string.

console.log(reverseString("hello")); // olleh
console.log(reverseString("javascript")); //tpircsavaj
console.log(reverseString("madam")); // madam