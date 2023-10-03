// && - and
// || - or
// ! - not

// ? : - ternar operator

// if (boolean)

// boolean (true | false)

const isAdmin = false;
const isUser = true;
const isOnline = true;

if (isAdmin) {
  console.log("Admin");
}

// if (isUser) {
//   console.log("User");
//   if (isOnline) {
//     console.log("online");  - binded conditions
//     if (true) {
//       console.log("true");
//     }
//   }
// }

const andCondition = isUser && isOnline && true && true;
console.log(andCondition);

if (andCondition) {
  console.log("User is online");
}

const orCondition = isUser || isAdmin || isOnline;
console.log(orCondition);

if (orCondition) {
  console.log("Member is recognized");
}

const n = 10;
const str = "Hello";
const bol = true;

if (n > 0 && n < 11) {
  console.log("Works");
}

if (str.length > 0 || typeof n === "string") {
  console.log("Works 2");
}

function checkStr(str) {
  return typeof str === "string" && str.length > 5;
}

function checkEmail(email) {
  return (
    typeof email === "string" &&
    email.includes("@") &&
    email.includes(".") &&
    email.length > 5 &&
    email !== "admin@gmail.com" &&
    email !== "a@gmail.com"
  );
}

if (checkStr("12345678") && checkStr("email@gmail.com")) {
  console.log("Works 3");
}

console.log(checkEmail("Igor"), 1);
console.log(checkEmail("email@gmail.com"), 2);
console.log(checkEmail(705), 3);

const con1 = false || false;
const con2 = false || true;

console.log(true && con1 && con2);

console.log(!true, "!");
console.log(!false, "!");

console.log(typeof str !== "string");
console.log("Hello" !== "");

console.log(checkEmail("ab@gmail.com"), "admin email");

// 1. Напишіть функцію що приймає значення (number)
// та його межі (границі) та повертає boolean
// якщо значення знаходииться в межах
// sol2(10, 1, 100) => true
// sol2(1, 5, 10) => false
// sol2(100, 1, 50) => false

// 2. Напишіть функцію що приймає
// строку та повертає boolean залежно від того чи є
// у строці символ (%)

// 3. Напишіть функцію що приймає дві умови і повератє true якщо обидві з них правдиві
// Перевірте свою функцію результатами з 2 попередніх
// sol3(re1(), res2())

// const res1 = sol1(10, 1, 11);
// const res2 = sol2("sqsq%");

// console.log(sol1(10, 1, 11) || sol2("sqsqs%") || sol3(res1, res2));

// function sol3(res1, res2) {
//   return sol1(res1) && sol2(res2);
// }

// if() {} else {}

console.log(true ? 12 : 11, "ternar operator");

function fn(sol1) {
  return sol1() ? 1 : 0;
}

function fn2(con) {
  if (con) {
    return 1;
  } else {
    return 0;
  }
}
