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
    return new Promise((resolve,reject)=>{
        for(const item of promises){
            Promise.resolve(item).then(resolve,reject);
        }
    })
}

//Example 1: Two resolved promises:
PromiseRace([
  Promise.resolve(1),
  Promise.resolve(2)
]).then(console.log).catch(console.error); 
// o/p: 1 (The first promise resolves immediately with 1)

// Example 2: First promise rejects: