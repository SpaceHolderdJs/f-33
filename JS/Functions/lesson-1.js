// Functional item
function fn() {
  return 1;
}

const resFn = fn();

console.log(resFn, "functionResult");

function procedure() {
  // no return
}

const resProcedure = procedure();

console.log(resProcedure, "procedureResult");

// налаштуйте фільтрацію для тільки тих функцій що мають return
const callStack = [
  // anonim fucntions
  function () {
    return "Hello";
  },
  function () {},
  () => 10,
  function () {},
];
const returnableFunctions = callStack.filter((el) => el());

console.log(returnableFunctions, "returnableFuntions");

fn2();
// fn3(); - will produce error
// Function declaration
// es5 (2015)
// hoisting
function fn2() {
  console.log("Hello from fn2");
}

// Function expression
const fn3 = function () {
  console.log("Hello from fn3");
};

// Arrow functions expression
// es6 2016+
const arrowFn = (a, b) => {};

// [].concat([], [], [], [], [], [], [], [], [], [], [], []);
// [].splice(0, 2, "", "", "", "");

Array.prototype.myConcat = function () {
  Array.from(arguments).forEach((array) => {
    this.push(array);
  });

  return this.flat();
};

const myConcatResult = [1, 2, 3, 4, 5].myConcat(
  [6, 7, 8],
  [9, 10],
  [11],
  [100]
);
console.log(myConcatResult, "RESULT");

// function expample() {
//   console.log(arguments, "args");
// }

// expample("Igor", "Oleg", 3, 4, 5);

// Function Constructors

function Person(name, age, city, salary) {
  this.name = name;
  this.age = age;
  this.city = city;
  this.salary = salary;

  //  Method
  this.greetings = function () {
    console.log(
      `Hello, I am ${this.name}, age: ${this.age}, I am living in ${this.city}!`
    );
  };

  this.birthday = function () {
    this.age = this.age + 1;
  };

  return this;
}

const person1 = new Person("Igor", 24, "Kyiv", 3200);
person1.greetings();

const person2 = new Person("Maya", 16, "Kyiv", 2000);
person2.greetings();
person2.birthday();
person2.greetings();

// function Person(name, age, city, salary) {
//     this.name = name;
//     this.age = age;
//     this.city = city;
//     this.salary = salary;

//     //  Method
//     this.greetings = function () {
//       console.log(
//         `Hello, I am ${this.name}, age: ${this.age}, I am living in ${this.city}!`
//       );
//     };

//     this.birthday = function () {
//       this.age = this.age + 1;
//     };

//     return this;
//   }

// Завдання:
//  Напишіть метод Person з назвою increaseSalary,
//  що примає надбавку та змінює значення salary і повертає його

// Завдання:
// Напишіть метод Peron з назвою addLocation(country)
// який має додати до даних персони параметр location з переданою
//  інформацією та повератє оновлену персону

function Star(x, y, color) {
  this.x = x;
  this.y = y;
  this.color = color;

  this.render = function (parent) {
    const star = document.createElement("div");
    star.classList.add("star");

    this.element = star;

    this.element.style.setProperty("top", `${this.y}px`);
    this.element.style.setProperty("left", `${this.x}px`);
    this.element.style.setProperty("background", this.color);

    parent.appendChild(this.element);

    return this;
  };

  return this;
}

const space = document.getElementById("space");
const starsMover = document.getElementById("stars-mover");

const starColors = ["white", "violet", "lightskyblue", "blue"];

function generateStars(quantity = 500) {
  for (let i = 0; i < quantity; i++) {
    const x = Math.floor(Math.random() * window.innerWidth * 2);
    const y =
      Math.floor(Math.random() * window.innerHeight * 3) -
      Math.floor(Math.random() * window.innerHeight * 3);

    const randomStarColor =
      starColors[Math.floor(Math.random() * starColors.length)];

    const star = new Star(x, y, randomStarColor);
    star.render(starsMover);
  }
}

generateStars(1500);

window.scrollTo({ left: 0, top: 0 });
