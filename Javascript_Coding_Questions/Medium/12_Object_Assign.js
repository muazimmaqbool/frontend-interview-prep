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
     // Loop through all source objects, example: { b: 2 }, { c: 3 }
    for(const source of sources){
        if(source===null || source===undefined)continue;
        for(const key in source){
             // Check that the property belongs directly to the source object and is not inherited from its prototype.
            if(Object.prototype.hasOwnProperty.call(source,key)){
                // Copy the property from source to target. If the same key already exists, it gets overwritten.
                to[key]=source[key]
            }
        }
    }
    return to;
}
console.log(customAssign({ a: 1 }, { b: 2 })); //{ a: 1, b: 2 }
console.log(customAssign({a: 1}, {a: 2, b: 3})); //{ a: 2, b: 3 }
console.log(customAssign({}, {a: undefined}, {b: null}));
// undefined and null are valid values and will be copied. so o/p is: { a: undefined, b: null }


//Extra object.assign() example:
const user = {
  name: "Muazim",
  age: 25,
  city:"Srinagar"
};

const details = {
  city: "Sopore",
  role: "Developer"
};

Object.assign(user, details);

console.log(user);
// {
//   name: "Muazim",
//   age: 25,
//   city: "Sopore",
//   role: "Developer"
// }