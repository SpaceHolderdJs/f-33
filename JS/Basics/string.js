const str = "Hello !!!";
const str1 = "Hello";
const emptyString = "";
// String

console.log(str1.length);
console.log(str1.toUpperCase()); // Великий регістр
console.log(str1.toLowerCase()); // Малий регістр
console.log(str1.concat(" World", "!!")); // Додає до строки інші строки(у) st1 + " Hello" + "!!"
// const result = str1.concat(" ", str);
// const finalResult = result.toUpperCase();
// console.log(finalResult, "!!!");

// console.log(str1.concat(" ", str).toLowerCase().length);
console.log(str[5]);

const string = "Hello World!!!:)";
// Створіть 3 змінних що містять відповідні літери в string [0], [3], [5]

const str3 = "I am web developer";
console.log(str3.replace("I am", "We are"));
console.log(str3.replaceAll(" ", "_"));

const indexOfE = str3.indexOf("e");
const result = str3.charAt(indexOfE + 1);
console.log(result, "!!!");

console.log(str3.indexOf("e"), str3[str3.length - 1]); // Є
console.log(str3.indexOf("#"), str3[-1]); // Немає
console.log(str3.charAt(-1));

console.log(str3.slice(2, 4)); // Відрізає від строки підстроку за індексами (поч -> кін)
console.log(str3.slice(5, 8));
console.log(str3.slice(9, 11));

console.log(str3.slice(2, 4).concat(str3.slice(5, 8), str3.slice(9, 11)));

// 1. Поверніть з функціїї три останні символи строки у збільшеному регістрі

const sol1 = function (str) {
  return str.slice(str.length - 3).toUpperCase();
};
console.log(sol1("Hello"));
// console.log(sol1({}));

// 2. Поверніть з функції половину довжини строки
// 3. Поверніть з функції строку з вказаними змінами

// fn (str, strToChange, whatToAdd) {}
// fn("Hello", "o", ":)") => Hell:)

const sol3 = function (str, strToChange, strToAdd) {
  return str.replace(strToChange, strToAdd);
};

console.log(sol3("Hello", "o", ":)"));

const str4 = "Hello";
const sent = "Lorem ipsum dolor";

console.log(str4.includes("$"), "includes");
console.log(sent.includes(" "));
console.log("hello".includes("hello"), "!!!", "hello" === "hello");

const sol5 = function (str) {
  const notAllowedWord = "!";
  // написати перевірку, що поверне true якщо у str є заборонене слово та false якщо немає
  if (str.includes(notAllowedWord)) {
    return true;
  } else {
    return false;
  }
};

// const fn = function (a) {
//   const res = a - 10;
//   return res;
// };

// fn(10);

const sayHelloTo = function (name) {
  const str = `Hello, ${name} have a good day`; // Interpolation

  console.log(str, str.length);

  return str;
};

sayHelloTo("Igor");
sayHelloTo("Arsen");
sayHelloTo("Maya");

const string1 = new String("Hello"); // old way of creation
console.log(string1);

const str6 = "Web Development";

let eSymbols = "";

// 2016+
for (const symb of str6) {
  if (symb === "e") {
    eSymbols = eSymbols.concat(symb);
  }
}

// // > 2016+
// for (let i = 0, k = 0; i < arr.length; i++, k *= 10) {
//   // arr[i] - element
// }

console.log(eSymbols.length, "eSymbols");

const str7 = "Lorem ipum dolor ament";

// Обійдіть циклом for-of строку, виводячи кожну її літеру

// 1. Дано строку let str1 = "12345" порахуйте суму цифр строки
// 2. Дано строку let str2 = "Hello world", вставте замість пробілу "<>"

// const sol6 = (str) => str.split("").reduce((acc, e) => (acc += +e), 0);
// const sol7 = (str) => str.replace(" ", "<>");

// console.log(sol6("12345"), sol7("Hello world"), "split");
