console.log("Hello World");

var a = 1078698;
var b = 20986;

// here timer is 0 and below timer is 3 that does not mean kii yeh Hello World k just baad hii execute ho jayega....yeh jb hii print hoga jb (V8) JS engine se call stack pura khali ho jayega or Global Execution Context move out ho jayega from call stack, tbhi hii Libuv apna apna code execute krwane k liye call stack me bhejega chahe 0 sec ho ya 1000 koi farak nii pdhta isse

setTimeout(() => {
  console.log("call me right now");
}, 0); // Trust Issues with setTimeout

setTimeout(() => {
  console.log("call me after 3 seconds");
}, 3000);

function multiplyFn(x, y) {
  const res = a * b;
  return res;
}

var c = multiplyFn(a, b);
console.log("Multiplication result is:", c);
