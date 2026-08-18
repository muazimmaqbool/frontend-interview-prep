/*
->You are required to write a function detectType(value) that takes a single input and returns a
 string representing its JavaScript data type. This should return one of the following values accurately:

->'string', 'number', 'boolean', 'undefined', 'object', 'function', 'symbol','bigint', 'array', or 'null'.

Note: Since typeof returns 'object' for both arrays and null, you'll need to handle those two as special cases.

Example Inputs & Outputs:
    detectType("hello") + "string"
    detectType(123) - "number"
    detectType(true) + "boolean"
    detectType(undefined) + "undefined"
    detectType({}) "object"
    detectType([]) + "array"
    detectType(null) + "null"
    detectType(function() {}) "function"
    detectType(Symbol("id"))+"symbol"
*/

function detectType(value) {
  //Note iam checking types of null and array seperately because: typeof null = object and typeof [] = object
  if (value === null) return "null";
  if (Array.isArray(value)) return "array";
  return typeof value;
}
console.log(detectType("hello"));          // "string"

console.log(detectType(123));              // "number"

console.log(detectType(true));             // "boolean"

console.log(detectType(undefined));        // "undefined"

console.log(detectType({}));                // "object"

console.log(detectType([]));                // "array"

console.log(detectType(null));              // "null"

console.log(detectType(function () {}));   // "function"

console.log(detectType(Symbol("id")));      // "symbol"
