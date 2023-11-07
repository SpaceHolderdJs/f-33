const arr = [1, 2, 3, 4, 5];

// map, forEach, filter, find, some, every, reduce, sort;

function sum(a, b) {
  return a + b;
}

const arrowFn = (a, b) => {
  return a + b;
};

const returnFromFunction = (a, b) => a + b;

arr.forEach((number, i, array) => {
  console.log(`Number`);
  console.log(number, i, array, "from ForEach");
}); //callback ES6+

// My realization

// Array.prototype.myForEach = function (callback) {
//   for (let i = 0; i < this.length; i++) {
//     callback(this[i], i, this);
//   }
// };

// arr.myForEach((el, i, array) => {
//   console.log(`My forEach`, el, i, array);
// });

// for (const number of arr) {
//   console.log(number, "from for-of");
// }

// Завдання:
// const arr = ["Oleg", "Maya", "Igor"];
// за допомогою forEach  виведіть:
// кожен елемент масива, його індекс та весь масив на кожній ітреації

// Завдання:
// const arr = ["Oleg", "Maya", "Igor"];
// Порахуйте загальну кількість літер всіх елементів масива (forEach)

// map
const arr2 = ["1", "2", "3", "4", "5"];

const arr2Numbers = arr2.map((e, i, arr) => +e); // повертає нову версію елемента
console.log(arr2Numbers, "numbers");

const names2 = ["igor", "oleg", "maya"];
const transformedNames = names2.map(
  (name) => `${name[0].toUpperCase()}${name.slice(1)}`
);

console.log(transformedNames, "tranformedNames");

// Завдання:
// const data = [{name: "Igor"}, {name: "Oleg"}, {name: "Yula"}]
// перетворіть масив data на масив вигляду ["igor", "oleg", "yula"] (map)

const data = [{ name: "Igor" }, { name: "Oleg" }, { name: "Yula" }];

const transformedData = data.map((elemt) => elemt.name.toLocaleLowerCase());

console.log(transformedData, "trasformedData");

// Задача:
// const data2 = [{a: 10}, {a: 5}, 7, 8, 1]
// нормалізуйте масив data2 до вигляду: [{a: 10}, {a: 5}, {a: 7}, {a: 8}, {a: 1}]

const data2 = [{ a: 10 }, { a: 5 }, 7, 8, 1];

const normalization1 = data2.map(
  (d) => (typeof d === "object" && d) || { a: d }
);

console.log(normalization1, "normalization");

const normalization2 = data2.map((data) => {
  if (typeof data === "object") {
    return data;
  } else {
    return { a: data };
  }
});

console.log(normalization2, "normalization2");

// filter
const arr3 = [9, 3, 10, 45, 1, 6, 8, 100, "100", "200", [1, 2, 3]];

const filteredArr3 = arr3.filter((e, i, arr) => e <= 1 || e.length === 3);

console.log(filteredArr3, "arr3");

// Завдання:
// const email = ["email@gmail.com", "!@#$%^&", "oleg", "email@ukr.net", "123@gmail.com"]
// відфільтруйте правильні emails (filter)

// find

const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

const n = numbers.find((e) => e > 5); //same with filter
console.log(n, "find");

const users = [
  { id: 1, name: "Igor", city: "Kyiv", age: 25 },
  { id: 2, name: "Maya", city: "Poltava", age: 15 },
  { id: 3, name: "Oleg", city: "Lviv", age: 20 },
  { id: 4, name: "Samvel", city: "Kharkiv", age: 20 },
  { id: 5, name: "Andriy", city: "Kyiv", age: 19 },
];

const user = users.find((user) => user.id === 3 && user.city === "Lviv");
const users10 = users.filter((user) => user.id === 3 || user.city === "Kyiv");

if (user) {
  // check if user is not undefined
  console.log(user, "USER");
}

console.log(user, "USER!");
console.log(users10, "USERS!");

const adultUsers = users.filter((user) => user.age > 18);
console.log(adultUsers, "Adult users");

const adlutUsersFromKyiv = adultUsers.filter((user) => user.city === "Kyiv");

console.log(adlutUsersFromKyiv, "adlutUsersFromKyiv");

const undefinedUser = users.find((user) => user.id === 100);
console.log(undefinedUser, "undefinedUser");
