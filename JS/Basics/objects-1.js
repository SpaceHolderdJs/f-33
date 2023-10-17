// Завдання: дано строку const str = "H1e3l2l3o4"
// порахуйте суму всіх чисео строки

// const str5 = "H1e3l2l3o4";
// const sum = 0;
// for (const char of str5) {
//   if (typeof char === "number") {
//     sum += char;
//   }
// }

// for (let char of str) { - для string та array
//   char - символ (частина строки)
// }

// for (let key in obj) { - для об`єктів
//    key - посилання на пам`ять об`єкта
//    obj[key] - значення за посиланням
// }

// for (let i = 0; i < 10; i++) {}

const str = "H1el2l3o4";

function fu(str) {
  let sum = 0;
  for (let index = 0; index < str.length; index++) {
    if (typeof +str[index] === "number" && !isNaN(+str[index])) {
      // if (!isNaN(+str[index])) {
      console.log(+str[index], typeof +str[index], typeof NaN);
      sum += +str[index];
    }
  }
  return sum;
}
console.log(fu(str));

// Завдання: напишіть функцію що приймає два об`єкти
// та повертає той у якому більше пар (ключ-значення)

// sol2({a: 10}, {a: 20, b: 30}) => {a: 20, b: 30}

function sol3(obj1, obj2) {
  return;
}

console.log(sol3({ a: 10 }, { a: 10, b: 20 }));

const dataOne = {
  age: 1,
};
const dataTwo = {
  age: 2,
  name: "Alex",
};

function fu(dataOne, dataTwo) {
  let sumOne = 0;
  let sumTwo = 0;

  for (const key in dataOne) {
    sumOne++;
  }

  for (const key in dataTwo) {
    sumTwo++;
  }

  if (sumOne > sumTwo) {
    return sumOne;
  } else {
    return sumTwo;
  }
}

const user = {
  name: "Anna",
  city: "Kyiv",
  geo: "124321414;1344143143",
};

const dataOfTestServer = {
  name: "Anna",
  city: "Kyiv",
  geo: "124321414;1344143143",
};

user.age = 10;
delete user.age;
user.name = "Oleg";

console.log(dataOfTestServer.name, dataOfTestServer.geo, dataOfTestServer.city);

const { name, geo, city } = user; // - destructing of object

console.log(name, geo);
console.log(geo.slice(0, 5));

const data = {
  a: 10,
  b: 20,
};

function sol1(data) {
  const { a, b } = data;
  return { s: a * b, p: 2 * (a + b) };
}

console.log(sol1(data), "!!!");

Object.values(data).length;
Object.keys(data).length;

const obj = Object.create({ name: "A" });

const entries = Object.entries(data).length;
console.log(entries, "Entries");

const objectData = [
  ["a", 10],
  ["b", 20],
];

console.log(Object.fromEntries(objectData), "fromEntries");
console.log(Object.name);
// console.log({ name: "I" }.getOwnProperty("name"));
data.length;

// Object.prototype.data = data;

// console.log({});

// String.prototype.show = function () {
//   console.log(this);
// };

// Завдання:
// Дано:

// const obj5 = {
//   a: { x: 10, y: 5 },
//   b: { x: 2, y: 1 },
//   c: { x: 18, y: 4 },
// };

// Завдання: порахуйте середні значення для координат X,Y і поверніть {x: number, y: number}

// function sol3(obj) {
//   return { x: 0, y: 0 };
// }

// sol3(obj5);

const obj5 = {
  a: { x: 10, y: 5 },
  b: { x: 2, y: 1 },
  c: { x: 18, y: 4 },
};

function sum(obj5) {
  let middleX = 0;
  let middleY = 0;

  const pointsQuantity = Object.keys(obj5).length;

  for (const key in obj5) {
    console.log(key, obj5[key].x);

    // ""[0]
    // ["1"][0]
    // {s: 10}["s"]
    // fn()
    // (a + b) * 2

    middleX = middleX + obj5[key].x; // - переприсвоєння
    middleY = middleY + obj5[key].y;
  }

  return { mx: middleX / pointsQuantity, my: middleY / pointsQuantity };
}
console.log(sum(obj5));
sum({ a: { x: 10 } });
