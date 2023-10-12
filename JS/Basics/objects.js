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

const object = {
  name: "Ann",
  age: 19,
  city: "Kyiv",
  bool: true,
};

// порахуйте загальну довжину всіх значень обє`кта, що є строкою (string) => 7
// for-in
// typeof

function sol2(obj) {
  let length = 0;

  for (const key in obj) {
    // if (typeof obj[key] === "string") {
    //   length = length + obj[key].length;
    // }

    // typeof obj[key] === "string" && (length = length + obj[key].length);
    if (typeof obj[key] === "string") length = length + obj[key].length;
  }

  console.log(length, "length");
  return length;
}

sol2(object);

console.log(typeof "AAAAAAAAA");

const str2 = "Hello";

str2.toUpperCase(); // виклик методу примітива

const data = {
  length: 10,
  width: 20,
  height: 23,
};

console.log(Object.keys(data), "keys");
console.log(Object.values(data), "value");

console.log(Object.values(data).reduce((acc, el) => (acc += el), 0));

let sum = 0;

for (const key in data) {
  sum = sum + data[key];
}

console.log(sum, "!!!");

// Завдання:
// порахуйсте суму всіх полів data
// for-in

const data2 = {
  length: 10,
  width: 20,
  height: 23,
  password: "389ndsjdnjdj3nd3j!3$",
};

console.log(data2.width);
console.log(data2, "before");

delete data2.password; // - видалення
delete data2.height;

data2.width = data2.width / 10; // - зміна значення
data2.height = data2.width;

data2.newData = "New Data"; // - додавання нових значень

console.log(data2, "after");

// Завдання:
// напишіть функцію що видаляє всі поля об'єкта

// Завдання:
// порахуйте кількість кожного символу строки
const message = "Hello, qwqwqq,wqwqwqwq,wqwqq, aak, ooo";
const messageData = {};

for (const letter of message) {
  if (messageData[letter]) {
    messageData[letter]++;
  } else {
    messageData[letter] = 1;
  }
}

console.log(messageData, "message Data");

// Завдання: напишіть функцію що повертає true якщо у реченні присутні коми

const obj10 = {
  str: "Olena", // true
  str2: "", // falsy
  n: 5, // true
  n2: 0, // falsy
  // hello: "Hello"
};

console.log(Boolean(obj10.str), "Olena");
console.log(Boolean(obj10.str2), "Empty str");
console.log(Boolean(obj10.n), "5");
console.log(Boolean(obj10.n2), "0");
console.log(Boolean(obj10.hello), obj10.hello, "hello");

console.log("!!!", obj10[","]);
console.log(Boolean(null), "bool5");

function fu(messageData) {
  // if (messageData[","]) {
  //   return true;
  // } else {
  //   return false;
  // }

  return Boolean(messageData[","]);
}
console.log(fu(messageData));

// Завдання: напишіть функцію що поверає кількість літер q (messageData)

// Завдання: напишіть функцію
// що повертає попередження якщо у messageData є більше ніж 3 літери w

// Завдання: напишіть функцію що рахує загальну кількість всіх символів (for-in, messageData)

function Total(messageData) {
  let total = 0;

  for (let key in messageData) {
    total = total + messageData[key];

    console.log(messageData[key], "number");
  }

  console.log(total, "total");
  return total;
}

Total(messageData);

const obj5 = {};

const room = {
  chair: 1,
  table: 1,
  carpet: "2",
};

console.log(room["table"] + room.chair + +room["carpet"]);

function name(n) {
  return `Name ${n}`;
}

console.log(name("Igor"));

for (let i = 0; i < 10; i = i + 2) {
  console.log(i);
}

const d = {
  s: {
    value: 100,
    m: "cm2",
  },
  p: { value: 150, m: "cm" },
  p: { value: 150, m: "cm" },
  p: { value: 150, m: "cm" },
};

for (const data in d) {
}

const name = "";
a;
b;
name;
value;
