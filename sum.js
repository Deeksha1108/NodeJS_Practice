// Modules protect their variables and functions/methods from leaking by default --> ekk module me se jb tk wo module na chahe kii uske functions/variables/methods koi access kr sake tb tk wo accessible nii hota without using module.exports isiliye yha last me (module.exports) ka use kiya gya h

console.log("Sum Module Executed");

export var x = "Hello World";

export function calculateSum(a, b) { // yeh export wala pattern MJS ko follow krne k liye kiya h isko (ES Modules, mjs bhi khte h) isse phle wale pattern ko jaha (module.exports) ka use kr rhe the usko (cjs Common JS module khte the)
  const sum = a + b;
  console.log(sum);
}

// module.exports = { x: x, calculateSum: calculateSum }; // You can write it as well just below line
// module.exports = { x, calculateSum }; // this is the neat way to write