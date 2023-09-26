const a = 10;
let b = 10;

// types of data
const bool = true; //false
const a1 = 10;
const str = "Hello";

const n = null;
const undf = undefined;

const arr = [];
const obj = {};

// function main() {}
// const arrowFn = () => {};

// Написати функцію, що приймає 2 аргументи та повертає їх суму

const numbers = [1, 5, 16, 10, 5, 16, 17];
// Написати функцію що обходить циклом массив чисел та повертає всі числа більше 10

// if () {}
// switch case
// true ? a : b;

// function main(a, b) {
//   const sum = a + b;

//   if (sum > 5) {
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log(main(8, 2));

// function main(str1, str2) {
//   const fullString = str1.toLowerCase() + str2.toLowerCase();

//   if (fullString === "js") {
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log(main("j", "S"));

// function checkUserRole(role) {
//   const roles = ["admin", "user", "guest"];
//   const allowedRoles = ["admin"];

//   // Check if role is allowed
//   // for(let i = 0; i < roles.length; i = i + 1) {}
//   for (const r of roles) {
//     console.log(r, "role!");
//     if (role === r) {
//       console.log("Role is allowed");
//       if (role === "admin") {
//          return "It works";
//       }
//
//       }
//     }
//   }
// }

// checkUserRole("admin");

const checkRole = function (role) {
  switch (
    role // for strings
  ) {
    case "admin": // ===
      return true;

    case "user":
      return false;

    case "guest":
      return false;

    default: // else
      return "Role is not allowed";
  }
};

console.log(checkRole("admin"));
