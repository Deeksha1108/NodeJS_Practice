const crypto = require("crypto"); // node:crypto => crypto both are same thing (node:crypto => core module)

console.log("Hello World");

var a = 1078698;
var b = 20986;

console.log("=======");
setTimeout(() => {
  console.log("call me right now!!");
}, 0); // It will only be called once call stack of main thread is empty




// This is an Sync function -> It will BLOCK MAIN Thread - Don't use it.
// crypto.pbkdf2Sync("password", "salt", 500000, 50, "sha512");
// console.log("Sync Key is generated");




// pbkdf2 -> Password Base Key Derivative Function
// This is an Async function
crypto.pbkdf2("password", "salt", 500000, 50, "sha512", (err, key) => {
  console.log("Async Key is generated");
});

function multiplyFn(x, y) {
  const res = a * b;
  return res;
}

var c = multiplyFn(a, b);
console.log("Multiplication result is:", c);
