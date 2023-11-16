const primitives = ["1", "2", "JavaScript", "3", 1, 2, 3, 4, true, true, true];
const objects = [1, { a: 10 }, { a: 9 }, { a: 6 }, { a: 6 }];
// findIndex - for objects-realated arrays
// indexOf - for primitive arrays

const indexOf1 = primitives.indexOf(true);
console.log(indexOf1);
console.log(primitives[indexOf1]);

// Завдання:
// const arr = ["Igor", "Alex", "Maya", "Max"];
// знайдіть індекс свого ім'я

// Wrong way (array of objects) -1
const indexOf1Obj = objects.indexOf({ a: 10 });
console.log(indexOf1Obj, "indexOfObj");

const indexOf2Obj = objects.findIndex((e, i, arr) => typeof e === "object");
console.log(indexOf2Obj, "findIndex");

const index3 = primitives.findIndex((e) => e === 1);
const index4 = primitives.indexOf(1);

const index5 = primitives.indexOf(true);
const index6 = primitives.lastIndexOf(true);

console.log("LAST INDEX OF", index5, index6);

console.log(index3, index4);

const arr = [{ city: "Kyiv" }, { city: "Lviv" }, { city: "Odessa" }];
const reduceRight = arr.reduceRight((acc, el) => {
  acc.push(el.city);
  return acc;
}, []);
console.log(reduceRight, "reduceRight");

const nums = [1, 2, 3, 4];

const result = nums.reduceRight((acc, e) => (acc += e), 0);
console.log(result, "!!!");

// Завдання:
// reduceRight
// const elements = [["x", "xx", "xxx"], ["xx", "xxx", "xxxx"], ["x", "x", "x"]];
// Перегорніть всі підмасиви головного масиву elements
// [["x", "x", "x"], ["xxxx", "xxx", "xx"], ["xxx", "xx", "x"]]

const elements = [
  ["x", "xx", "xxx"],
  ["xx", "xxx", "xxxx"],
  ["x", "x", "x"],
];

console.log(
  elements.reduceRight((acc, arr) => {
    const reversedSubArray = arr.reverse();
    acc.push(reversedSubArray);

    return acc;
  }, []),
  "result"
);

console.log(
  elements.reduceRight((acc, arr) => [...acc, arr.reverse()], []),
  "result2"
);

// sort
const numbers = [5, 8, 1, 5, 2, 0];
const sortedNumbers = numbers.sort((el1, el2) => el2 - el1);
console.log(sortedNumbers);

const objects2 = [{ a: 5 }, { a: 10 }, { a: 7 }, { a: 1 }];
const sortedObjects = objects2.sort((obj1, obj2) => obj1.a - obj2.a);
console.log(sortedObjects, "sortedObjects");

const sortedObjects2 = objects2.sort((e1, e2) => console.log(e1, e2, "el"));
console.log(sortedObjects2, "sortedObjects2");

const users = [
  { name: "Igor", age: 19, salary: 1200 },
  { name: "Oleg", age: 29, salary: 1800 },
  { name: "Max", age: 30, salary: 900 },
];

const usersBySalary = [...users].sort(
  (user1, user2) => user2.salary - user1.salary
);
console.log(usersBySalary, "usersBySalary", users);

// Завдання: допишіть sort
const usersByAge = [...users].sort();

const letters = ["А", "Ф", "К", "Г", "Я", "@", "A", "B", "C", "a"];
const alphabeticSort = letters.sort((str1, str2) => str1.localeCompare(str2));

console.log(alphabeticSort, "!!!");

const fruits = ["pear", "apple", "orange", "banana"];
const alphabeticSort2 = fruits.sort((w1, w2) => w1.localeCompare(w2));
console.log(alphabeticSort2, "alp sort");

// Завдання:

const arr20 = ["4", "2", "8", "9"];
// відсортуйте елементи масива за порядком арифметичного зростання

const mapped = arr20.map((e) => Number(e));
mapped.sort((a, b) => a - b);
console.log(mapped, "mapped");
