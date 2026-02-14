const fs = require("fs");
const https = require("https");

console.log("Hello World");

var a = 1078698;
var b = 20986;

// Synchronous => It is block main thread so, isko use nii krna chahiye jaha aage Sync aagya means wo synchronously work krega that's why we should not use it
// fs.readFileSync("./file.txt", "utf8"); // 100ms
// console.log("This will execute only after file read");

https.get("https://dummyjson.com/products/1", (res) => {
  console.log("Fetched Data Successfully");
});

setTimeout(() => {
  console.log("setTimeout called after 5 seconds");
}, 5000);

// Async Function
fs.readFile("./file.txt", "utf8", (err, data) => {
  console.log("File data:", data);
});

function multiplyFn(x, y) {
  const res = a * b;
  return res;
}

var c = multiplyFn(a, b);
console.log("Multiplication result is:", c);
