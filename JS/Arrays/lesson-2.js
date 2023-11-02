// Завдання:
// Отримайте від користувача перелік елементів масива у якості строки,
// де елементи розділені комою
// Поверніть користувачу масив на базі цієї строки

// 10, 20, 30, 40 => [10, 20, 30, 40]

// const str = prompt("Enter elements")

// Array methods
const array = [1, 2, 3, 4, 5, [6, 7, 8], 9, 10];
const coords = [[5, 0], [1, 5, 5], [3, 1, 7, 8, 9], [2]];

for (const element of array) {
  console.log(element, "!!!");
}

const flattedArray = array.flat();
console.log(flattedArray, "flatedArray");

const flattedCoords = coords.flat();
console.log(flattedCoords, "flattedCoords");

// Порахувати сумму всіх чисел у coords

let sum = 0;

for (const arrayElement of coords) {
  console.log(arrayElement, "coord element");

  for (const number of arrayElement) {
    console.log(number, "NUMBER");
    sum += number;
  }
}

console.log(sum, "array_sum");

const complexArray = [[1, 2, 3, [4, [8]]], [0]];
const lessComplexArray = complexArray
  .flat(10) // [1, 2, 3, 4, 8, 0]
  .slice(0, 2) // [1, 2]
  .reverse(); // [2, 1]
console.log(lessComplexArray, "2");

const names = ["Igor", "Oleg", "X", "Y", "Z"];
names.push("Anna");

console.log(names, "names before");

delete names[2]; // not right way

console.log(names, "names after");

for (const name of names) {
  console.log(name, "NAME");
}

// Завдання:
// Напишіть функцію, що прймає масив та інший масив елементів,  які треба видалити з основного масива
// та повертає новий масив без зазначених елементів

// removeElementFrom([1,2,3,4,5], [2,3]) => [1,4,5]

// function removeElementFrom(arr, elementToRemove) {
//   const resArray = [];

//   for (const element of arr) {
//     if (element !== elementToRemove) {
//       resArray.push(element);
//     }
//   }

//   console.log(resArray, "res");
//   return resArray;
// }

// removeElementFrom([1, 2, 3, 4, 5], 3);

// const array2 = [1, 2, 3, 4, 5, "Hello", function () {}, { a: 100 }];
// console.log(array2.includes("Hello"), "includes"); // only primitives

// Завдання:
// Напишіть функцію, що приймає масив та інший масив елементів,  які треба видалити з основного масива
// та повертає новий масив без зазначених елементів

function removeElementsFromArray(arr, elementsToRemove) {
  const res = [];

  for (const element of arr) {
    console.log(
      elementsToRemove.includes(element),
      `Looking for ${element} in ${elementsToRemove}`
    );

    if (!elementsToRemove.includes(element)) {
      console.log(`${element} shoud be removed`);
      res.push(element);
    }
  }

  console.log(res, "RES");
  return res;
}

removeElementsFromArray([1, 2, 3, 4, 5], [1, 5]);

// push [1,2,3] .push(4) => [1,2,3,4]

const arr3 = ["Apple", "Banana", "Orange"];

arr3.push("Pear"); // додає елемент у кінець масива
console.log(arr3, "push");

const pear = arr3.pop(); // видаляє елемент з кінця масива
console.log(pear, arr3, "pop");

const newLength = arr3.unshift("Pear"); // додає елемент на початок масива
console.log(newLength, arr3, "unshift");

const pear2 = arr3.shift(); // видаляє елемент з початку масива
console.log(pear2, arr3, "shift");

// Завдання:
// Перегорніть масив (без reverse)

function reverseArray(arr) {
  const res = [];

  for (const _ of Array.from(arr)) {
    const poppedElement = arr.pop();
    res.push(poppedElement);
    console.log(poppedElement, "POPPED ELEMENT");
  }

  console.log(res, "RESULT");
  return res;
}

reverseArray([1, 2, 3, 4, 5]);

const arr4 = [1, 2, 3, 4, 5];
const arr5 = [6, 7, 8, 9, 10];

const resArrr = arr5.concat(arr4, [11, 12, 13]); // об`єднує масиви (так само як string)

console.log(resArrr, "concat");

const obj = { a: 10 };
const obj2 = { b: 15 };
const obj3 = { ...obj, ...obj2, c: 10 };

console.log(obj3, "3");

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr6 = [...arr1, ...arr2];

console.log(arr6, "6");

const copyOfArr1 = [...arr1]; //Array.from() - те саме

const objectsArray = [{ a: 15 }, { a: 5 }, { a: 1 }];
const copyOfobjectsArray = [...objectsArray];

console.log(copyOfobjectsArray, "copyOfobjectsArray");

const { a } = obj; // деструктуризація об`єкта

console.log(a, "AA");

const names2 = ["Igor", "Anna"];
const [first, second] = names2; // деструктуризація масива

const igor = names2[0];
const anna = names2[1];

console.log(first, second);

const coords2 = [10, 15, 3];
const [x, y, z] = coords2;

console.log(x, y, z);
