const fs = require("fs");

const a = 100;  // execute by v8
setImmediate(() => {    // v8 offloads to libuv
  console.log("setImmediate");
});

fs.readFile("./file.txt", "utf8", () => {  // v8 offloads to libuv
  console.log("File Reading CB");
});

setTimeout(() => console.log("Timer Expired"), 0);  // v8 offloads to libuv

function printA() {   // execute by v8
  console.log("a =", a);
}

printA();  // execute by v8
console.log("Last line of the file.");  // execute by v8





// Output:
// a = 100
// Last line of the file.
// Timer Expired
// setImmediate
// File Reading CB