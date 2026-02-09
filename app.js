require("./xyz");

// const calculateSum = require('./sum');
const obj = require("./sum"); // you can write it as well and javascript k acc. it is the best way to write
const { x, calculateSum } = require("./sum");

var name = "Namaste NodeJS";

var a = 10;
var b = 20;

console.log(name);
// console.log(a + b);

// obj.calculateSum(a, b); // when you destructuring it then you don't need to call it as (obj.calculateSum) you can call as directly like this just below line
calculateSum(a,b); 

// console.log(obj.x);
console.log(x);

// console.log(global); // need to deep
// console.log(this); // need to deep

// console.log(globalThis); // need to deep
// console.log(globalThis === global);
