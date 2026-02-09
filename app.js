require("./xyz");

// const calculateSum = require('./sum');
const obj = require("./sum");

var name = "Namaste NodeJS";

var a = 10;
var b = 20;

console.log(name);
// console.log(a + b);

obj.calculateSum(a, b);
console.log(obj.x);

// console.log(global); // need to deep
// console.log(this); // need to deep

// console.log(globalThis); // need to deep
// console.log(globalThis === global);
