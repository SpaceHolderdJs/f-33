// - Створіть масив з декількома числами. (const arr = [ 11, 6, 7, 3, 9, 5, 30])
// - Відсортуйте елементи масиву у зростаючому порядку.
// - Перегорніть порядок елементів у масиві.
// - Видаліть перший елемент масиву.
// - Додайте новий елемент у кінець масиву.
// - Виведіть остаточний масив.

const arr = [11, 6, 7, 3, 9, 5, 30];

const res = arr
  .sort((n1, n2) => n1 - n2)
  // sort((n1, n2) => n2 - n1)
  .reverse()
  // shift()
  .filter((e, i) => i !== 0)
  // push()
  .concat([77]);

console.log(res, "res");

// Advanced sorting

const users = [
  { name: "Alex", salary: 1200, age: 30 },
  { name: "Igor", salary: 1200, age: 24 },
  { name: "Olga", salary: 3200, age: 19 },
];

// 0, 1, -1
const usersbySalaryAndAge = users.sort((user1, user2) => {
  const cretiria = user1.salary - user2.salary || user1.age - user2.age;
  console.log(cretiria, "cretiria");
  return cretiria;
});

const sorted = users.sort(
  (user1, user2) =>
    user1.salary - user2.salary ||
    user1.name.localeCompare(user2.name) ||
    user1.age - user2.age
);

console.log(usersbySalaryAndAge, "usersBySalary");

// Завдання:
// const scopes = "({({}}])(}][";
// Напишіть функцію що повертає true якщо всі дужки у строці закриті і false якщо ні

// .split("")

const scopes = "({({}}])(}][";
const scopes2 = "()";

function isAllSopesClosed(scopes) {
  const closed = "({[";
  const opened = ")}]";

  const hashMap = {
    "()": [[], []],
    "{}": [[], []],
    "[]": [[], []],
  };

  const keys = Object.keys(hashMap);
  const values = Object.values(hashMap);

  scopes.split("").forEach((currentScope) => {
    const scopeTypeIndexKey = keys.findIndex((key) =>
      key.includes(currentScope)
    );

    // [[], []]
    values[scopeTypeIndexKey][opened.includes(currentScope) ? 0 : 1].push(
      currentScope
    );
  });
  console.log(values, "values", hashMap);

  return values.every(
    ([closedBrackets, openedBrackets]) =>
      closedBrackets.length === openedBrackets.length
  );
}

console.log(isAllSopesClosed(scopes), "RESULT");
console.log(isAllSopesClosed(scopes2), "RESULT2");

// "{([".includes(el);
// "{,(,[" === el;

function sol(scopes) {
  let sumOp = 0;
  let sumClosed = 0;

  for (const el of scopes) {
    console.log(el, "scope");
    if ("{([".includes(el)) {
      sumOp++;
    }

    if ("}])".includes(el)) {
      sumClosed++;
    }
  }

  console.log(sumOp, sumClosed, "sum");

  return sumOp === sumClosed;
}

console.log(sol(scopes), "Test1");
console.log(sol(scopes2), "Test2");

const arr1 = [1, 2, 3];
const arr2 = [1, 2, 3];

console.log(arr1 === arr2);

// Завдання:
// const arr3 = [1,2,3,4,5];

// Поверніть true якщо всі елементи масива є number

// Завдання:
// const arr4 = [{a: 1}, {a: 8}, {a: 1}, {a: 3}]

// Відсортуйте у порядку зростання

// Завдання:
// const arr5 = ["H", "e", "l", "l", "o"];
// Знайдіть індекс першої літери "l"

// Завдання:

// const sum = 200;
// const arr6 = [60, 40, 20, 1, 50, 8];

// Відняти кожне значення елемента масива від sum та повернути результат

// console.log([60, 40, 20, 1, 50, 8].reduce((acc, el) => acc - el, 200));

// Завдання:

// const arr7 = [[1,2,3], [5], [7,8], [10]];

// Приведіть мсасив до вигляду однорівневого та зменшіть кожне число в половину (/2)

// Завдання:

// const arr8 = [100, 2, 800, 444, 321, 1, 6];
// Залиште у масиві тільки трьохзначні числа

// console.log(
//   [100, 2, 800, 444, 321, 1, 6].filter((e) => e.toString().length >= 3),
//   "!!!"
// );

// splice

const fruits = ["apple", "bananna", "orange"];

const removedFruits = fruits.splice(fruits.indexOf("bananna"), 1, "pear");

console.log(fruits, "fruits", removedFruits);

// Завдання:
// const users = [{name: "Igor"}, {name: "Olga"}, {name: "Oleg"}, {name: "Alex"}];
// Замініть користувача {name: "Olga"} на користувача {name: "Your name"}

// Завдання:
// const numbers = [10, 1, 20, 2, 30, 3]; => [10, 20, 30]

// Приберіть всі числа з довжиною 1 (1,2,3)

// [10, 1, 20, 2, 30, 3].forEach((el, i, arr) => {
//   if (el.toString().length === 1) {
//     numbers.splice(i, 1);
//   }
// });

const elements = [
  ["x", "xx", "xxx"],
  ["xx", "xxx", "xxxx"],
  ["x", "x", "x"],
];

console.log(
  elements.reduceRight((acc, arr, i) => {
    const reversedSubArray = [...arr].reverse(); // mutable
    console.log(reversedSubArray, "reversed array");
    acc.push(reversedSubArray);

    console.log(acc, "ACC RESULT", i);

    return acc;
  }, []),
  "result"
);

console.log(
  elements.reduceRight((acc, arr) => [...acc, [...arr].reverse()], []),
  "result2"
);

// Поміняйте місцями числа 3 та 4 у масиві (splice)
const arr22 = [1, 2, 3, 4, 5, 6];
const removedElements = arr22.splice(2, 2).reverse();
const [el1, el2] = removedElements;
arr22.splice(2, 0, el1, el2);

console.log(arr22, "result");

// Напишіть функцію що повертає true якщо строка однаково читається з ліва на право та з право на ліво
// (”ded” читається однаково з 2 сторін, також наприклад слово “oko” та подібні)

const str = "dederetet";

const fn = (str) => str.split("").reverse().join("") === str;

console.log(fn(str), "result palindrom");

const data = [
  { id: 1, name: "John", age: 25 },
  { id: 2, name: "Alice", age: 30 },
  { id: 3, name: "Bob", age: 22 },
];

data.sort(
  (person1, person2) =>
    person1.id - person2.id ||
    person1.name.localeCompare(person2.name) ||
    person1.age - person2.age
);

console.log(data, "sort result");
