/*
The Object.assign() method copies all enumerable own properties from one or more source objects to a target object. 
It returns the modified target object. 
Your task is to replicate this functionality.
    . If the target is null or undefined, throw a TypeError.
    . Only enumerable and own properties should be copied.
    . Later source properties overwrite earlier ones if they have the same key.
    . The method should return the target object.

Example Inputs & Outputs:
    customAssign({a: 1}, {b: 2}) ----> {a: 1, b: 2}
    customAssign({a: 1}, {a: 2, b: 3}) ----> {a: 2, b: 3}
    customAssign({}, {a: undefined}, {b: null}) ----> {a: undefined, b: null}
*/
function customAssign(target,...sources){
    if(target===null || target===undefined){
        throw new TypeError("Cannot convert undefined or null to object")
    }
    const to=Object(target)
    for(const source of sources){
        if(source===null || source===undefined)continue;
        for(const key in source){
            if(Object.prototype.hasOwnProperty.call(source,key)){
                to[key]=source[key]
            }
        }
    }
    return to;
}
console.log(customAssign({ a: 1 }, { b: 2 }));
console.log(customAssign({a: 1}, {a: 2, b: 3}));
console.log(customAssign({}, {a: undefined}, {b: null}))