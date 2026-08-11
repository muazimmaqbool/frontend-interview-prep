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
function curry(fn) { //fn is the original function that we want to curry.
  return function curried(...args) {
    //fn.length = 3, tells us how many parameters the function expects.
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
/*
function curry(fn) {
    fn is the original function that we want to curry.
    
    Example:
    function add(a, b, c) {
        return a + b + c;
    }
    
    fn.length tells us how many parameters the function expects.
    For add(a, b, c):
    fn.length = 3


    return function curried(...args) {

        ...args collects all arguments passed in the current call.
        
        Example:
        curried(1)
        args = [1]
        
        curried(1, 2)
        args = [1, 2]


        Check if we have collected enough arguments.
        
        fn.length = number of arguments the original function expects.
        
        Example:
        add(a, b, c)
        fn.length = 3
        
        If we already have 3 arguments,
        we can call the original function.

        if (args.length >= fn.length) {

            Spread the arguments and pass them to the original function.
            
            Example:
            args = [1, 2, 3]
            
            fn(...args)
            becomes:
            add(1, 2, 3)

            return fn(...args);

        } else {

            We don't have enough arguments yet.
            
            So instead of calling fn(),
            we return another function.
            
            This new function will wait for more arguments.

            return function (...nextArgs) {

                nextArgs contains the arguments from the next call.
                
                Example:
                
                curried(1)(2)
                
                First call:
                args = [1]
                
                Second call:
                nextArgs = [2]


                Now combine the old arguments with the new arguments.
                
                args = [1]
                nextArgs = [2]
                
                [...args, ...nextArgs]
                = [1, 2]
                
                Then call curried again:
                
                curried(1, 2)

                return curried(...args, ...nextArgs);
            };
        }
    };
}

*/