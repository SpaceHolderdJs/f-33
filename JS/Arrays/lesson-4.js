const arr = [1, 2, 3, 4, "5"];
// every, some, reduce, sort

const isEvery = arr.every((e) => typeof e === "number");
console.log(isEvery, "every");

const emails = ["email1@gmail.com", "email2@gmail.com", "NOT EMAIL"];

const isEmails = emails.every(
  (email) => email.includes("@") && email.includes(".") && email.length > 5
);

console.log(isEmails, "isEmails");

const validEmails = emails.filter(
  (email) => email.includes("@") && email.includes(".") && email.length > 5
);

console.log(validEmails, "valid Emails");

const users = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 19 },
  { name: "Charlie", age: 22 },
  { name: "Diana", age: 28 },
  { name: "Eva", age: 35 },
];

const isEachUserAdult = users.every((user) => user.age > 18);

console.log(isEachUserAdult, "isUsersAdult");

const text =
  "Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Quis soluta iste, aliquam fuga &  eligendi laboriosam aut dolore, nihil a cumque fugit nam quae doloribus exercitationem, iusto labore. Nihil, vero rem.";

console.log(text.split(" "));
const isTextAllowed = text.split(" ").every((word) => !word.includes("&"));
console.log(isTextAllowed, "isTextAllowed");

// Завдання:
const elements = [
  [10, 1],
  [5, 7],
  [0, 3],
];
// Переконайтеся що сумма кожного підмасива більша за 10

const arr2 = ["a", "b"];
const [a, b] = arr2;

const isAllElementsSumGraterThan10 = elements.every((subArray, i, arr) => {
  const [a, b] = subArray;

  return a + b > 10;
});

console.log(isAllElementsSumGraterThan10, "isAllElementsSumGraterThan10");

// some

const arr3 = [1, 2, 3, 4, 5, "6", "7", "8"];

const isSomeElementNumber = arr3.some((e) => typeof e === "object");

console.log(isSomeElementNumber, "isSomeElementNumber");

const arr4 = [{ age: 20 }, { age: 19 }, { age: 18 }];

const isSomeUserNotAdult = arr4.some((user) => user.age < 18);

console.log(isSomeUserNotAdult, "isSomeUserNotAdult");

Array.prototype.myEvery = function (callback) {
  let result = true;

  for (let i = 0; i < this.length; i++) {
    const callBackResult = callback(this[i], i, this);

    if (!callBackResult) {
      result = false;
      return result;
    }
  }

  return result;
};

const arr5 = [1, 2, 3, 4, "5"];
const result = arr5.myEvery((e) => typeof e === "number");
console.log(result, "my Every result");

//reduce

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const sum = numbers.reduce((acc, e, i, arr) => {
  console.log(acc, e, "!!!");
  return acc + e;
}, 100);
console.log(sum, "SUM");

const arr6 = [{ a: 10 }, { a: 40 }, { a: 30 }]; // [10, 40, 30]
const mappedResult = arr6.map((el) => el.a);
console.log(mappedResult, "!!!");

const reducedResult = arr6.reduce((acc, e) => {
  const a = e.a;
  acc.push(a);

  return acc;
}, []);

console.log(reducedResult, "!!!");

const arr7 = [{ x: 30 }, { y: 10 }, { z: 20 }];

const coords = arr7.reduce((acc, el) => {
  return { ...acc, ...el };
}, {});

console.log(coords, "coords");

const acc = [];

acc.push("1");
for (let i = 0; i < arr7.length; i++) {
  sum += 0;
}

console.log(sum);

[].reduce((acc, e) => {
  return acc + e;
}, 0);
