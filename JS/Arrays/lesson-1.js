const str = "Hello";
console.log(str[0]); // доступ за індексом

Array;

const array = [5, 4, 3, 2, 1];
console.log(array, array.length, array[0]);
// const array2 = new Array();

const names = ["Igor", "Oleg", "Andrii"];

const namesObject = {
  0: "Igor",
  1: "Oleg",
  2: "Andrii",
};

namesObject[0];
names[0];

const info = [true, "Hello", 0, {}, [], function () {}, null, undefined];

console.table(names);

// Цикл по масиву
for (const number of array) {
  console.log(number, "for-of");
}

for (let i = 0; i < array.length; i++) {
  console.log(array[i], "for classic");
}

// Завдання:
// const array = [5, 4, 3, 2, 1];
// Порахуйте суму всіх елементів масива

// Методи масива

const data = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const tags = ["nature", "data", "weather"];

data.length; // - довжина
console.log(data.length);

const stringedArray = data.join("+");
console.log(eval(stringedArray));
console.log(stringedArray, "stringed array");
console.log(tags.join("; "));

const str2 = "123456789";

const str3 = "01.07.2019";
const splittedDate = str3.split(".");

const year = splittedDate[2];
const month = splittedDate[1];
const day = splittedDate[0];

console.log(year, month, day);

const date = ["01", "07", "2019"];
console.log(date.join("."));

// Завдання:
// Дано масив літер

// Вивести на базі масива літер слово (join)

// const letters = ["H", "e", "l", "l", "o"];
// console.log(letters.join(""));

// Завдання:
// Дано

// const str = ["h", "e", "l", "l", "o"]; => ["H", "E", "L", "L", "O"]
// Зробіть літери масива великими (має повернутися масив)
const array2 = ["a", "b", "c"];

console.log(array2.slice(0, 2), "slice");

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log(numbers.slice(1, 4));

// Завдання:
// Написати функцію що приймає масив та ділить його
// навпіл повертаючи ту половину масиву, сума чисел якої більша
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// function divideArray(arr) {
//   const halfOfLength = Math.floor(arr.length / 2);

//   const firstHalf = arr.slice(0, halfOfLength);
//   const secondHalf = arr.slice(halfOfLength, arr.length);

//   console.log(firstHalf, secondHalf, "array parts");

//   const sums = {
//     sum1: 0,
//     sum2: 0,
//   };

//   for (const n of firstHalf) {
//     sums.sum1 += n;
//   }

//   for (const n of secondHalf) {
//     sums.sum2 += n;
//   }

//   return sums.sum1 > sums.sum2 ? firstHalf : secondHalf;
// }

// console.log(divideArray(numbers));

function divideArray(arr) {
  const halfOfLength = Math.floor(arr.length / 2);

  const firstHalf = arr.slice(0, halfOfLength);
  const secondHalf = arr.slice(halfOfLength, arr.length);

  let sumFirstHalf = 0;

  for (let i = 0; i < firstHalf.length; i++) {
    sumFirstHalf += firstHalf[i];
  }

  let sumSecondHalf = 0;

  for (let i = 0; i < secondHalf.length; i++) {
    sumSecondHalf += secondHalf[i];
  }

  console.log(sumSecondHalf, sumFirstHalf, "!!!");

  if (sumFirstHalf > sumSecondHalf) {
    return firstHalf;
  } else {
    return secondHalf;
  }
}
console.log(divideArray(numbers), "!!");

// Порахуйте суму всіх а у масиві

const array3 = [{ a: 10 }, { a: 11 }, { a: 28 }];

const newArrayLength = array3.push({ a: 100 }); // додає до масива вказаний елемент у його кінець

console.log(array3, "array3", newArrayLength);

for (const obj of array3) {
  console.log(obj, "obj");
}

// Завдання:
// Дано const array3 = [{ a: 10 }, { a: 11 }, { a: 28 }];
// написати функцію що поверне спрощену версію масиву
// simplifyArray(array3) => [10, 11, 28]
// push()

// трансформація масива

function simplifyArray(arr) {
  const reslut = [];

  for (const element of arr) {
    reslut.push(element.a);
  }

  return reslut;
}

console.log(simplifyArray(array3), "!!!!");

const arrOfNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const reversedArray = arrOfNumbers.reverse(); // перегортає масив (зворотній напрямок)

console.log(reversedArray, "reversedArray");
