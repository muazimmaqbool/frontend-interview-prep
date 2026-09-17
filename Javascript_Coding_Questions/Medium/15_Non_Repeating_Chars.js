// Question: Find the first non-repeating character in a string.
// Explanation:
// A non-repeating character is a character that appears exactly once in the entire string.
// To solve this, we count how many times each character appears, then scan the string again
// and return the first character whose count is 1.
// If no such character exists, return -1.
//
// Example 1:
// Input: "aabbcde"
// Output: "c"
// Explanation: 'c' appears once, and it is the first character with this property.
//
// Example 2:
// Input: "leetcode"
// Output: "l"
// Explanation: 'l' is the first character that appears only once.
//
// Example 3:
// Input: "aabb"
// Output: -1
// Explanation: no character appears exactly once.

//solution:
function firstNonRepeatingChar(str){
    const count={};

    //count how many times each character appears
    for(let char of str){
        count[char]=(count[char]||0)+1;
    }

    console.log("count:",count)
    //find the first character that appears only once
    for(let char of str){
        if(count[char]===1){
            return char
        }
    }
    //all characters are repeating
    return null;
}
// Time: O(n)
// We loop through the string twice.
// O(n) + O(n) = O(2n) → O(n)

// Space: O(n)
// In the worst case, we store n different characters.

console.log(firstNonRepeatingChar("aabbcdde")); // "c"
console.log(firstNonRepeatingChar("leetcode")); // "l"
console.log(firstNonRepeatingChar("aabbcc"));   // null


/*
->Explanation of:
    for(let char of str){
        count[char]=(count[char]||0)+1;
    }

    count[char] gets the current count of the character.
    If the character doesn't exist yet, count[char] is undefined.
    (count[char] || 0) means use the existing count, otherwise start with 0.
    + 1 increases the character's count by 1.
    
    Example: "aab"
        First "a"  → (undefined || 0) + 1 = 1
        Second "a" → (1 || 0) + 1 = 2
        "b"        → (undefined || 0) + 1 = 1
        
        Final count = { a: 2, b: 1 }

    count[char] = (count[char] || 0) + 1;
*/  
