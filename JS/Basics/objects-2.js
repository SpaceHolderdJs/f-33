const obj = {
  a: 10,
};

obj.a = 20;

console.log(obj, "object");

// Advanced object methods

Object.freeze(obj); // readonly

console.log(Object.isFrozen(obj), "isFrozen");

obj.a = 30;
obj.b = 100;

console.log(obj, "object");

const obj2 = {
  a: 50,
};

Object.seal(obj2);

console.log(Object.isSealed(obj2), "isSealed");

obj2.a = 1;
obj2.b = "Hello";

console.log(obj2, "object2");

// Завдання:
// Створіть об`єкт з даними та забороніть його розширення

// Завдання:
// Створіть об`єкт з даними та забороніть його зміни

const obj3 = {
  a: 10,
  b: 30,
  c: 40,
};

// obj3.d = 50;

// loop before
for (const key in obj3) {
  console.log(obj3[key], key, "value of object3 (before)");
}

Object.defineProperty(obj3, "d", {
  value: 50, // значення
  enumerable: true, // доступніть у циклі
  writable: true, // можливість змінити (переприсвоїти значення) obj3.d = 100;
  configurable: true, // можливість видаляти данні + зміни
});

console.log(obj3, "object3");

for (const key in obj3) {
  console.log(obj3[key], key, "value of object3 (after)");
}

console.log(obj3.d, "D");

obj3.d = 100;

delete obj3.d;

console.log(obj3.d, "D after");

// Завдання:
// Напишіть функцію що приймає об`єкт та ключ і робить цей ключ прихованим для циклу

// hideFromLoop(obj, "a")

const obj4 = {
  a: 10,
  b: 11,
};

function hideFromObject(obj, key) {
  Object.defineProperty(obj, key, {
    value: obj[key],
    writable: true,
    configurable: true,
    enumerable: false,
  });

  return obj;
}

console.log(hideFromObject(obj4, "a"), "result");

for (const key in obj4) {
  console.log(key);
}

// Завдання:
// Напишіть функцію що приймає об`єкт та масив ключів і робить ці ключі прихованими для циклу

// hideFromLoop(obj, ["a", "b"])

// Завдання:
// Напишіть функцію що приймає об`єкт та ключ і робить цей ключ не можливим для переприсвоєнь

// hideFromLoop(obj, "a")

// Spread operator

const obj5 = {
  a: 10,
};

const obj6 = {
  b: 20,
};

const obj7 = {
  c: 30,
};

obj5.b = obj6.b;
obj5.c = obj7.c;

console.log(obj5, "!!!");

const allObjectsData = { a: 90, ...obj5, ...obj6, ...obj7 };

console.log(allObjectsData, "All object data");

// Завдання
// написати функію, що приймає 2 об`єкти та об`єднує їх
// mergeObjects(obj1, obj2)  => {}

// const user1 = { name: "Igor" };
// const user2 = user1;

// user1.name = "Oleg";

// console.log(user1, user2, "user1,user2");

// const a = 10;
// const b = a;

// console.log(a, b, "a,b");

const user1 = { name: "Igor" };
const user2 = { ...user1 };

user1.name = "Oleg";

console.log(user1, user2, "user1,user2");

function copyObject(obj) {
  const resultObject = {};

  for (const key in obj) {
    resultObject[key] = obj[key];
  }

  return resultObject;
}

const data = { amount: 10, d: 20 };
const data2 = copyObject(data);

data.d = 1000;

console.log(data, data2, "data,data2");

// Завдання:
// напишіть функцію що примає 2 objects і повертає object їх спільних ключів
// getCommonPartOfObjects(obj1, obj2) => {a: value}

function getCommonPartOfObjects(obj1, obj2) {
  const allObjectsData = { ...obj1, ...obj2 };

  for (const key in allObjectsData) {
    if (!obj1[key] || !obj2[key]) {
      delete allObjectsData[key];
    }
  }

  return allObjectsData;
}

console.log(
  getCommonPartOfObjects({ a: 10, b: 20, c: 10 }, { a: 10, b: 30 }),
  "!!!"
);

const data10 = { a: 10 };
const data11 = { b: 20 };

Object.assign(data10, data11); // додає данні з data11 у data10

console.log(data10, data11, "data10,data11");

const data12 = { ...data10, ...data11 };
