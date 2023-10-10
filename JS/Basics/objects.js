const obj = {};
Object;

const user = { name: "Igor", age: 24, key: true, data: { a: 10, b: 20 } };
console.log(user.name);
console.log(user.age);
console.log(user["age"]);
console.log(user);
console.log(user.data.a, "A");

const a = 10;

const obj2 = { a: 10 };

console.log(a, obj2.a);

// Створіть свій object з ключами що відповідають вашим данним

// Напишіть функцію що примає текст (prompt)
// від користувача та повертає відповідні данні
// sol() => { length: 10, bigLetters: 3, smallLetters: 20 }
// str.toUpperCase() str.toLowerCase()

// const sol = () => {
//   const str = prompt("Enter the text");

//   let bigLetters = 0;
//   let smallLetters = 0;

//   for (const char of str) {
//     // logic
//   }

//   return {
//     length: "",
//     bigLetters: 0,
//     smallLetters: 0,
//   };
// };

// function sol(str) {
//   const text = prompt("Enter the text");

//   let bigLetters = 0;
//   let smallLetters = 0;

//   let bigLettersStr = "";
//   let smallLettersStr = "";

//   for (const char of text) {
//     // s === S
//     if (char === char.toUpperCase()) {
//       // bigLetters = bigLetters + 1;
//       bigLettersStr = bigLettersStr.concat(char);
//     }
//     // r === r
//     if (char === char.toLowerCase()) {
//       smallLettersStr = smallLettersStr.concat(char);
//       // smallLetters = smallLetters + 1;
//     }
//   }

//   return {
//     length: text.length,
//     bigLetters: bigLettersStr.length,
//     smallLetters: smallLettersStr.length,
//     word: text,
//   };
// }

// console.log(sol());
// console.log(sol("str"));
// console.log(sol("HELLO"));
// console.log(sol("HhHhHhHhH"));

const obj3 = new Object({ name: "Obj3" }); // old creation way
console.log(obj3, "obj3");

// Напишіть функцію що приймає
// інформацію про користувача та повертає на її базі object

function sol(name, age, city, position, email) {
  return {
    name: name,
    age,
    city,
    position,
    email,
  };
}
const res = sol("Igor", 24, "Kyiv", "Senior FullStack dev", "email@gmail.com");
console.log(res, res.position);

const str = "1234";

console.log(str[10 - 10], "!!!!!!!");

// loop for string
for (const letter of str) {
  // for arrays and strings
  console.log(letter); // iteration
}

// for (let i = 0; i < arr.length; i++) {}

for (const key in res) {
  // only for objects

  // key - ключ
  // res[key] - значення

  console.log(key, "!!!", res[key]);
}

console.log("________________");

const arr = ["a", "b", "c", "d"];

for (const letter of arr) {
  // i++
  // for arrays and strings
  console.log(letter); // iteration
}

// Завдання

// const cart = {
//   tShirt: 100,
//   shorts: 50,
//   apple: 3,
//   orange: 1.5,
// };

// // напишіть функцію що рахує та виводить суму цін всіх товарів
// // for-in
// let sum = 0;

// for (const key in cart) {
//   sum += cart[key];
// }

// console.log(sum, "!!!");

// Завдання

const cart = {
  100: "tShirt",
  50: "shorts",
  3: "apple",
  1.5: "orange",
};

// напишіть функцію що рахує та виводить суму цін всіх товарів
// for-in
