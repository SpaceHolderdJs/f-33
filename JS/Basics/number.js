const num = 0;
const num1 = 0.5;
const num2 = -3;

// Number
// Math

// Infinity

console.log(1 / 0); // Infinity
console.log(Infinity * Infinity, "!!!");

console.log("AAAA" * 12); // NaN
console.log(12 + "AAA");
console.log(NaN / NaN, "!!!");

console.log(null - 2); // number
console.log(undefined + 2); // NaN

let a = 10;

console.log(typeof null === "object");

function sum(a, b) {
  return a + b;
}

console.log(Math.PI, "PI");
console.log(Math.floor(Math.random() * 10), "random");
console.log(Math.floor(11.99438));
console.log(Math.pow(11, 5), 11 * 11);

console.log(Math.max(1, 7, 3, 9, 10), "max");
console.log(Math.min(9, 1, 5, 3), "min");

const str = "ABCD";

console.log(a++, a); // increment
console.log(a--, a); // decrement

console.log((a *= a), a);
console.log((a /= a), a);

console.log(a >= 10);
console.log(a <= 10); // =>

// 1. Напишіть функцію що приймає сторони прямокутника а та b та повертає їх площу та периметр

// 2. { name: "Igor", age: 24, city: "Kyiv", index: 121 } - поверніть з функції об`єкт лише з полями типу Number

// 3. Напишіть функцію що приймає число та степінь у яку це число треба привести і поверніть результат
// sol3(10, 2) => 100

// function prymokut(a = 10, b = 15) {
//   //   const a = 10;
//   //   const b = 15;

//   const pl = a * b;

//   const per = 2 * (a + b);

//   console.log(pl, per, "RESULT");
// }

// prymokut();
// prymokut(15, 10);

// 4. Дано
// const str = "Hello World I am here";
// Порахуйте кількість пробілів

const funS = function (a = 10) {
  const step = Math.pow(a, 2);

  return step;
};

console.log(funS(), "step");

const n1 = 100;
const n2 = 999;
const price = 10.536636363;

console.log(n1.toString(), "string");
console.log(n2.toString(), "string2");

console.log(price.toFixed(2).concat(" $"), "toFixed");

// Написати функцію що приймає сумму (не ціле число)
// та валютний символ і повертає оптимізовану ціну продукту
// з 3 знаками після коми та валютою

// sol1(88.12345, "$") => "88.123 $"
