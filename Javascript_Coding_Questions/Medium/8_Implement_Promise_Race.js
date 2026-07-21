//Question: Implement Promise Race:
/*
Implement a function promiseRace that mimics the behavior of Promise. race(). It takes an array of
promises (or values) and returns a promise that settles (either resolves or rejects) as soon as the first
input promise settles.


Input: An array of promises or values
Output: A single promise that resolves/rejects with the result/error of the first settled promise

Example Inputs & Outputs:
    Example 1:
        Input: [Promise.resolve(1), Promise.resolve(2)]
        Output: Resolves with 1

    Example 2:
        Input: [Promise.reject('error'), Promise.resolve(2)]
        Output: Rejects with 'error'

    Example 3:
        Input: [42, Promise.resolve(10)]
        Output: Resolves with 42 (since 42 is a non-promise value)

    Example 4:
        Input: []
        Output: Never settles (same as native Promise.race)

Constraints & Edge Cases:
    . Input can contain both promises and non-promise values.
    . The result should reflect the first settled item.
    . If input is empty, the returned promise should never settle.
    . Input may include a mix of resolved, rejected, and pending promises.
*/
function PromiseRace(promises){
    //returms a new promise
    return new Promise((resolve,reject)=>{
        for(const item of promises){
             // Promise.resolve() converts: Promise -> remains the same and Non-promise value -> wraps it into a resolved Promise so if 42 is Promise.resolve(42)
            Promise.resolve(item).then(resolve,reject);
        }
    })
}
// Time Complexity
// Time: O(n) — iterates through the array once.
// Space: O(1) (excluding the input array and internal promise bookkeeping).

//Example 1: Two resolved promises:
PromiseRace([
  Promise.resolve(1),
  Promise.resolve(2)
]).then(console.log).catch(console.error); 
// o/p: 1 (The first promise resolves immediately with 1)

// Example 2: First promise rejects:
PromiseRace([
  Promise.reject("Error"),
  Promise.resolve(2)
])
.then(console.log)
.catch(console.error);
// o/p: Error (Since the rejection happens first, the returned promise is rejected.)

//Example 3: Non-promise value:
PromiseRace([
  42,
  Promise.resolve(10)
])
.then(console.log)
.catch(console.error);
// o/p: 42 (because Promise.resole(42) resolves immediately)

//Example 4: Delayed promises:
const p1 = new Promise((resolve) =>
  setTimeout(() => resolve("First"), 1000)
);

const p2 = new Promise((resolve) =>
  setTimeout(() => resolve("Second"), 500)
);

PromiseRace([p1, p2])
  .then(console.log)
  .catch(console.error);
// o/p: Second (Although p1 appears first in the array, p2 settles first.)

//Example 5: Empty array:
PromiseRace([])
  .then(console.log)
  .catch(console.error);

console.log("Still running...");
// o/p: Still running... (Nothing else happens because the returned promise never settles, exactly like the native Promise.race([]))