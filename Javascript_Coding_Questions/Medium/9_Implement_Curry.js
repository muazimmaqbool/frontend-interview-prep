/*
Create a curry function that accepts a function fn and returns a curried version of it. The curried function
should accept arguments one at a time, and once all arguments are received (based on the original function's
arity), the original function should be executed.

->What is currying?
    Currying is a technique where a function that normally takes multiple arguments is transformed into a sequence of functions that each take some arguments.
    For example, instead of:
        function add(a, b, c) {
            return a + b + c;
        }
        add(1, 2, 3);
        
        ->With currying, you can do: add(1)(2)(3);

Example Inputs & Outputs:
        function sum(a, b, c) {
            return a + b + c;
        }   

        const curriedSum = curry(sum);

        curriedSum(1)(2)(3); // 6
        curriedSum(1,2)(3); //  6
        curriedSum(1)(2, 3); // 6
        curriedSum(1, 2, 3); // 6
*/
function curry(fn) {
  return function curried(...args) {
    if (args.length >= fn.length) {
      return fn(...args);
    } else {
      return function (...nextArgs) {
        return curried(...args, ...nextArgs);
      };
    }
  };
}
function sum(a, b, c) {
  return a + b + c;
}

const curriedSum = curry(sum);

console.log(curriedSum(1)(2)(3)); // 6
console.log(curriedSum(1, 2)(3)); //  6
console.log(curriedSum(1)(2, 3)); // 6
console.log(curriedSum(1, 2, 3)); // 6
