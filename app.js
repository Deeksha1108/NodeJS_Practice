// require("./xyz");

// const calculateSum = require('./sum');
// const obj = require("./sum"); // you can write it as well and javascript k acc. it is the best way to write

// const { x, calculateSum } = require("./sum");
import { calculateSum } from "./sum.js"; // yeh import wala pattern MJS ko follow krne k liye kiya h isko (ES Modules, mjs bhi khte h) isse phle wale pattern ko jaha require ka use kr rhe the usko (cjs Common JS module khte the)

var name = "Namaste NodeJS";

var a = 10;
var b = 20;

console.log(name);
// console.log(a + b);

// obj.calculateSum(a, b); // when you destructuring it then you don't need to call it as (obj.calculateSum) you can call as directly like this just below line
calculateSum(a,b); 

// console.log(obj.x);
// console.log(x);

// console.log(global); // need to deep
// console.log(this); // need to deep

// console.log(globalThis); // need to deep
// console.log(globalThis === global);
