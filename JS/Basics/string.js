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
