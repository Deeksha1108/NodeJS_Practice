const fs = require("fs");

setImmediate(() => {
  console.log("setImmediate");
});

setTimeout(() => console.log("Timer Expired"), 0);

Promise.resolve().then(() => {
  console.log("Promise");
});

fs.readFile("./file.txt", "utf8", () => {
  setTimeout(() => console.log("2nd Timer"), 0);

  process.nextTick(() => console.log("2nd nextTick"));

  setImmediate(() => console.log("2nd setImmediate"));

  console.log("File reading CB");
});

process.nextTick(() => console.log("nextTick"));

console.log("Last line of the file.");



// Output:
// Last line of the file.
// nextTick
// Promise
// Timer Expired
// setImmediate
// File reading CB
// 2nd nextTick
// 2nd setImmediate
// 2nd Timer