/*
->Create a function that performs a deep clone of a given JavaScript object. 
  The function should handle nested objects, arrays, and primitive data types without retaining any references to the original object.

Example Inputs & Outputs:
    const original = { a: 1, b: { c: 2 }, d: [3, 4] };
    const cloned = deepClone(original);

    console.log(cloned); // { a: 1, b: { c: 2 }, d: [3, 4] }
    console.log(cloned !== original); // true
    console. log(cloned.b !== original.b); // true
    console.log(cloned.d !== original.d); // true

Constraints & Edge Cases:
    . The function should handle objects and arrays of arbitrary depth.
    . It should not modify the original object.
    . The function should correctly clone primitive values (number, string, boolean, null, undefined, symbol).
    . Functions and special objects (like Date, RegExp) are not required to be cloned accurately.
*/
function deepClone(obj) {
  // Your implementation
  if (obj === null || typeof obj !== "object") {
    return obj;
  }

  // if the value is an array, create a new empty array. Otherwise, create a new empty object.
  let clone = Array.isArray(obj) ? [] : {};
  //console.log("clone",clone)

  //Loop through all properties of the object/array.
  for (let key in obj) {
    // Make sure the property belongs directly to this object,
    // not to its prototype.
    if (obj.hasOwnProperty(key)) {

      // Recursively clone the value.
      // If the value is another object/array,
      // deepClone() will create a new copy of it.
      clone[key] = deepClone(obj[key]);
    }
  }
  return clone;
}
const original = { a: 1, b: { c: 2 }, d: [3, 4] };
const cloned = deepClone(original);

console.log(cloned); // { a: 1, b: { c: 2 }, d: [3, 4] }
console.log(cloned !== original); // true
console.log(cloned.b !== original.b); // true
console.log(cloned.d !== original.d); // true
