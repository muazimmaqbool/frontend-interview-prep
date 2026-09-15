/*
->Combination Sum:
    Write a function that returns all unique combinations of candidates where the chosen numbers sum to the target.

    The same number may be chosen from candidates an unlimited number of times. Return the combinations in any order.

    Input: An array of distinct integers candidates and an integer target.

    Output: A 2D array containing all unique combinations of numbers that sum to the target.

    Example Inputs & Outputs:
        Example 1:
        Input: candidates = [2,3,6,7], target = 7
        Output: [[2,2,3], [7]]

        Example 2:
        Input: candidates = [2,3,5], target = 8
        Output: [[2,2,2,2], [2,3,3], [3,5]]

        Example 3:
        Input: candidates = [2], target = 1
        Output: []

        Example 4:
        Input: candidates = [1], target = 2
        Output: [[1,1]]

        Example 5:
        Input: candidates = [1], target = 1
        Output: [ [1]]

    Constraints & Edge Cases:
        . All numbers in candidates are positive and distinct.
        . Candidates can be reused multiple times.
        . No duplicate combinations allowed (i.e., same frequency counts considered same).
        . Return empty array if no combination is possible.
*/
function combinationSum(candidates,target){
    const ans=[];
    const temp=[];
    function solve(ind, target) {
    if (target === 0) {
      ans.push([...temp]);
      return;
    }
    if (ind === candidates.length || target < 0) return;
    temp.push(candidates[ind]);
    solve(ind, target - candidates[ind]);
    temp.pop();
    solve(ind + 1, target);
  }
  solve(0, target);
  return ans;
}
console.log(combinationSum([2, 3, 6, 7], 7)); // [ [ 2, 2, 3 ], [ 7 ] ]

console.log(combinationSum([2, 3, 5], 8)); // [ [ 2, 2, 2, 2 ], [ 2, 3, 3 ], [ 3, 5 ] ]

console.log(combinationSum([2], 1)); // []

console.log(combinationSum([1], 2)); // [[1,1]]

console.log(combinationSum([1], 1)); // [ [ 1 ] ]