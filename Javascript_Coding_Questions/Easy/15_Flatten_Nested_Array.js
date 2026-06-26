//Flatten Nested Array:
/*
Example:
    input=[1,[2,[3,4]5],6]
    ouput=[1,2,3,4,5,6]
*/

//Solution One:
const flattenArrayOne=(arr)=>{
    return arr.flat(Infinity)
}
console.log(flattenArrayOne([1, [2, [3, 4], 5], 6])) // [1,2,3,4,5,6]
console.log(flattenArrayOne(['a','b',['c','d'],['e',['f','g']],'i'])) // ['a', 'b', 'c','d', 'e', 'f','g', 'i']

console.log("*****************")
//Solution Two:
const flattenArrayTwo=(arr)=>{
    const result=[]
    for(let i=0;i<arr.length;i++){
        if(Array.isArray(arr[i])){
            /*
            Note: why .push() is not used in place of .concat(), explained below:
            */
            result=result.concat(flattenArrayTwo(arr[i]))
        }else{
            result.push(arr[i])
        }
    }
    return result
}
console.log(flattenArrayOne([1, [2, [3, 4], 5], 6])) // [1,2,3,4,5,6]
console.log(flattenArrayOne(['a','b',['c','d'],['e',['f','g']],'i'])) // ['a', 'b', 'c','d', 'e', 'f','g', 'i']
/*
`concat()` is used because the recursive call returns an array. We want to merge its elements into the result array, not add the whole array as a single item.

    Example:

    let result = [1, 2];

    result.push([3, 4]);
    console.log(result);
     Output: [1, 2, [3, 4]]

    result = [1, 2];

    result = result.concat([3, 4]);
    console.log(result);
    Output: [1, 2, 3, 4]

    So, `push()` adds the entire array as one element, while `concat()` merges all elements into the existing array, which is why `concat()` is used in recursive array flattening.
*/