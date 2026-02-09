// Modules protect their variables and functions/methods from leaking by default --> ekk module me se jb tk wo module na chahe kii uske functions/variables/methods koi access kr sake tb tk wo accessible nii hota without using module.exports isiliye yha last me (module.exports) ka use kiya gya h

console.log("Sum Module Executed");

var x = "Hello World";

function calculateSum(a, b) {
  const sum = a + b;
  console.log(sum);
}

// module.exports = { x: x, calculateSum: calculateSum }; // You can write it as well just below line
module.exports = { x, calculateSum }; // this is the neat way to write
