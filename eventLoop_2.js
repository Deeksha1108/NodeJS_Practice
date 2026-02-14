const fs = require("fs");

const a = 100; // execute by v8

// v8 offloads to libuv
setImmediate(() => {
  console.log("setImmediate");
});

Promise.resolve().then(() => {
  console.log("Promise");
});

// v8 offloads to libuv
fs.readFile("./file.txt", "utf8", () => {
  console.log("File Reading CB");
});

setTimeout(() => console.log("Timer Expired"), 0); // v8 offloads to libuv

process.nextTick(() => console.log("Process.nextTick"));

function printA() {
  // execute by v8
  console.log("a =", a);
}

printA(); // execute by v8
console.log("Last line of the file."); // execute by v8
