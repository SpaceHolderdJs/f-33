const bool = true;
const bool2 = false;

Boolean;
const oldBoolean = new Boolean(false); // old creation way

console.log(oldBoolean);

// falsy
console.log(Boolean(0), "0");
console.log(Boolean(""), "empty string");
console.log(Boolean(null), "null");
console.log(Boolean(undefined), "undefined");
console.log(Boolean(false), "false");
// not-falsy
console.log(Boolean("false"), "false as string");
console.log(Boolean([]), "empty array");
console.log(Boolean({}), "empty obj");

const str = ""; // false
const str1 = "Hello"; // true

let sum = 0;

let data = null;

data = "This is data";

if (data) {
  console.log("data", data);
}

if (sum) {
  console.log(sum, "sum");
}

if (str1) {
  console.log("Not empty");
}

function sumFn(a, b) {
  console.log(a, b, "args");
  if (a && b) return a + b;
  if (a && !b) return a;
  if (!a && b) return b;
}

console.log(sumFn(2, 3), "1");
console.log(sumFn(10, 0), "1");

function sumFn2(a = 0, b = 0) {
  return a + b;
}

console.log(sumFn2(10, ""));

// 1. Написати функцію що приймає будь-яке значення і повертає від нього Boolean
// 2. Написати функцію що приймає number та повертає true якщо число не є цілим
// 10.5

// if (num.toString().includes(".")) {
//   return false;
// } else {
//   return false;
// }

// return num.toString().includes(".") ? true : false;

function sol2(n) {
  //   if (n.toString().includes(".")) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  //   return n.toString().includes("."); 👍
  //   return n.toString().includes(".") ? false : true;
}

console.log(sol2(20.4), "!!!");
console.log(sol2(20), "!!!");
