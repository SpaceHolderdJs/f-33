// window - global object
// scope

console.log(window, "!!!");
window.console.log("Hello");

const a = 10;

console.log(window.a);

String;
Boolean;
Number;

Object;

function main() {}

// const name = prompt("Enter your name");
// const age = prompt("Enter your age");
// alert(`Hello, ${name}, ${age}`);

// const conf = confirm("Keep going ?");
// console.log(conf, "conf");

for (let i = 0; i < 10; i++) {}

// Завдання: написати рандомайзер чисел
// while (confirm("Is random value needed?")) {
//   alert(`Random value is: ${(Math.random() * 10).toFixed(0)}`);
// }

// for (; confirm("Is random value needed?"); ) {
//   alert(`Random value is: ${(Math.random() * 10).toFixed(0)}`);
// }

// Завдання: Напишіть функцію що приймає від користувача
// число (prompt) та виводить кількість нулів у цьому числі

// Напишіть функцію що
// приймає масив чисел та число K і повертає
// підмасив (2 елементи) чисел, сума яких дорівнює K

// sol([1,2,3,4,5,6], 8) => [3, 5]

const sol1 = () => {
  const inputNumber = prompt("Enter your number"); // число від користувача
  let strResult = "";

  for (const char of inputNumber) {
    console.log(char, "input");

    if (char === "0") {
      strResult = strResult.concat(char);
    }
  }

  console.log(strResult.length, "result");
  return strResult.length;
};

const sol2 = () => {
  const inputNumber = prompt("Enter your number"); // число від користувача
  let zeroCount = 0;

  for (const char of inputNumber) {
    console.log(char, "input");

    if (char === "0") {
      zeroCount = zeroCount + 1;
    }
  }

  console.log(zeroCount, "result");
  return zeroCount;
};

// Завдання: Запросіть у користувача рік його нарождення (prompt)
// та виведіть його вік const year = 2023

// const year = prompt("Enter year of your birth");

// Завдання: напишіть гру "Відгадай число"
// const n = 10;
// prompt("Guess the number")

// function guessNumber() {
//   let n = 11;
//   const guess = prompt("Guess");

//   if (guess === n) {
//     alert("Stop");
//   }
// }

// guessNumber();

// function sol3() {
//   const n = 10;
//   const guess = prompt("Guess the number");

//   if (n === +guess) {
//     alert("You are right!");
//   } else {
//     alert("You loose");
//   }

//   let attemptsCount = 0;

//   while (true) {
//     const guess = +prompt("Guess the number");
//     attemptsCount++;

//     if (n === guess) {
//       alert(`You won, the number was: ${n}. Your attempts: ${attemptsCount}`);
//       break; // повний вихід з циклу
//     } else {
//       alert(`The number ${guess} is wrong`);
//     }
//   }
// }

// sol3();

console.log("Log");
console.warn("Warning");
console.error("Error", new Error("Error :)"));

const data = [
  { name: "Igor", age: 10 },
  { name: "Alex", age: 20 },
];
console.log(data);
console.table(data);

console.time("Loop");

for (let i = 0; i < 100; i++) {
  const result = i * 100;
}

console.timeLog("Loop");

// window

console.log(window);

// BOM - Browser Object Model
// DOM - Document Object Model

// const name = prompt("Enter the name");
// document.title = `Hello, ${name}`;

const color = prompt("Enter the color");
document.body.style.background = color;
