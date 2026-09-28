//Question: Implement a Throttle Function in JavaScript?
/*
Implement a custom throttle() function that limits how frequently a function can execute.
    The throttled function should:
        - Execute immediately on the first call.
        - Prevent execution again until the specified delay has passed.
        - Preserve the original function's arguments and this context.
        - Return the result of the last successful execution.

    Throttle limits a function so that it can execute at most once within a specified time interval. It's commonly used for high-frequency events 
    like scroll, resize, and mouse movement.
*/
function throttle(func, delay) {
  //stores the time when func was executed last time
  let lastCall = 0;

  //stores the result of the last execution
  let lastResult;

  return function (...args) {
    //getting current time in milliseconds
    const now = Date.now();

    //checking if enough time has passed since the previous execution
    if (now - lastCall >= delay) {
      //updating the last execution time
      lastCall = now;

      //calling the original function
      lastResult = func.apply(this, args);
    }
    // If delay hasn't passed, don't execute func again
    return lastResult;
  };
}
//example 1:
const log = throttle((message) => {
  console.log(message);
}, 1000);

log("Hello"); // Executes immediately
log("Hi");    // Ignored
log("Hey");   // Ignored

// After 1 second
log("Welcome"); // Executes

//example 2:
const throttledLog = throttle((message) => {
  console.log(message);
}, 1000);

throttledLog("First");  // Executes

setTimeout(() => {
  throttledLog("Second"); // Ignored - only 500ms passed
}, 500);

setTimeout(() => {
  throttledLog("Third"); // Executes - 1100ms passed
}, 1100);