// Modules protect their variables and functions from leaking by default

console.log("Sum Module Executed");

var x = "Hello World";

function calculateSum(a, b) {
  const sum = a + b;
  console.log(sum);
}

module.exports = { x: x, calculateSum: calculateSum };
