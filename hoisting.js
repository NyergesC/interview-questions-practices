// 1 - VARIABLE: Hoisting

/*  In JavaScript, variable declarations are hoisted to the top of their containing scope,
 but not their assignments. This means that you can use a variable before
 it's declared, and it won't cause an error, but the value will be undefined.
 */
console.log(x); // undefined
var x = 5;

//it the variable let or const:
console.log(y); // ReferenceError: y is not defined
let y = 5;

// 2 - FUNCTION: Hoisting:

// Function declarations are hoisted to the top of their containing scope, so you can use a function before it's declared.

foo(); // "Hello, I'm foo!"
function foo() {
    console.log("Hello, I'm foo!");
}

// 3 - FUNCTION EXPRESSION: Hoisting:

// However, function expressions are not hoisted, so you cannot use a function before it's declared.

bar(); // TypeError: bar is not a function
var bar = function() {
    console.log("Hello, I'm bar!");
};