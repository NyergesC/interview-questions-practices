// UNDEFINED: primitive

//undefined represents a variable that has been declared but has not been assigned a value, or a property that does not exist in an object.
//It is a primitive value and is also a type of data (undefined) in JavaScript.
//represents the absence of a value in a variable.
//default value of a variable that has been declared but has not been assigned a value.

let x;
console.log(x); // Output: undefined

let obj = {};
console.log(obj.property); // Output: undefined

// NULL: object

//null is a special value in JavaScript. It represents "nothing", "empty" or "value unknown".
//It is a primitive value and is also a type of data (null) in JavaScript.
//null is an assignment value. It can be assigned to a variable as a representation of no value.

let myVar = null;
console.log(myVar); // Output: null

// NaN: property of the global object and is considered a numeric data type.

//NaN is a special value in JavaScript. It represents "Not-a-Number" and is a result of an invalid or an undefined mathematical operation.
//It's a special value that indicates that a value is not a valid number.

let result = 10 / "hello";
console.log(result); // Output: NaN


