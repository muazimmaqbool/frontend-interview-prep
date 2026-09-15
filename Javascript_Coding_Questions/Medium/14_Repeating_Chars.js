/*
Question: Find the first repeating character in a string.

    Given a string, find the first character that appears more than once.
    Return the character that repeats first. If there is no repeating character, return null.

    ->Examples
        Input: "abcdca"
        Output: "c"

    ->Explanation:
        a → appears once
        b → appears once
        c → appears again later
        So the first repeating character is "c".

    ->Input: "hello"
      Output: "l"
      l is the first character that appears more than once.
*/
function firstRepeatingChar(str) {
    // A Set stores unique values.
  const seen = new Set();
  for (let char of str) {
    // if we have already seen this character, it is the first repeating character
    if (seen.has(char)) {
      return char;
    }
    // add the character to the Set
    seen.add(char);
  }

  // no character was repeated
  return null;
}
// Time: O(n)
// Space: O(n)

console.log(firstRepeatingChar("abcdca")); // "c"
console.log(firstRepeatingChar("hello"));  // "l"
console.log(firstRepeatingChar("abcde"));  // null
console.log(firstRepeatingChar("aabbcc")); // "a"

/*
Extra:
    ->We could use: seen.includes(char); i.e let seen=[] as array
    but Set.has() is designed specifically for membership checking and is O(1) average time, whereas Array.includes() is O(n).

    We use a Set to keep track of characters we've already visited and efficiently check for duplicates using has(). This allows us to solve the problem in O(n) time.
*/
