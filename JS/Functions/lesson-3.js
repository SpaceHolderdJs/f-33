function Fn1(a) {
  this.a = a;
  return this;
}

Fn1.prototype.showA = function () {
  console.log(this.a, "a");
};

function Fn2(a, b) {
  this.a = a;
  this.b = b;
  return this;
}

Fn2.prototype = Fn1.prototype;

const fn1 = new Fn1(100);
fn1.showA();

const fn2 = new Fn2(1000);
fn2.showA();

// call, bind, apply (this)

const fn = function (a, b, c, d) {
  this.a = a;
  this.b = b;
  this.c = c;
  this.d = d;
  console.log(this);
};

fn.apply({ d: 100 }, [10, 20, 30, 60]);
fn.call({ d: 101 }, 10, 20, 30, 77);

const anotherFn = fn.bind({ d: 200 }, 10, 20, 40, 90);
anotherFn();

const obj1 = {
  a: 10,
  increaseA: function () {
    this.a = this.a + 1;
  },
};

obj1.increaseA();
console.log("increased", obj1);

const obj2 = {
  a: 100,
};

obj2.increaseA = obj1.increaseA.bind(obj2);
// obj2.increaseA = obj1.increaseA.apply(obj2);

obj2.increaseA();
obj2.increaseA();

console.log("increased", obj2);

// const max = Math.max(1, 2, 3, 4);
// console.log(max, "max");

// const maxValue = Math.max.apply(null, [1, 2, 3, 4]);
// console.log(maxValue, "!!");

const maxValue = (arr) => Math.max.apply(null, arr);
console.log(maxValue([1, 2, 3, 4, 5]));

const arr = [1, 2, 3, 4, 5];

arr.forEach.call(arr.concat([6, 7, 8]), (el) => {
  console.log(el);
});

const result = arr.reduce.apply(arr.slice(1), [
  (acc, el) => (acc += el),
  10000,
]);
console.log(result, "result");

arr.slice(1).reduce((acc, el) => (acc += el), 10000);
// Array.prototype.myArray = function () {
//   console.log(this);
// };

// [1, 2, 3, 4, 5, 6, 7, 8, 9].myArray();

// Завдання:
// Використайте функцію getData на: масиві, об`єкті та примітиві

// Додайте обробку об`єкта функції
// getData так, щоб вона предавала йому всі аргументи

function getData(a, b, c) {
  if (Array.isArray(this)) {
    return this;
  }

  if (typeof this === "object") {
    this.a = a;
    this.b = b;
    this.c = c;

    this.sum = [...arguments].reduce((acc, n) => (acc += n), 0);
    return this;
  }

  return null;
}

const result1 = getData.apply({ sum: 0 }, [10, 20, 30]);
const result2 = getData.apply([1, 2, 3, 4]);
const result3 = getData.apply(0);

console.log(result1, result2, result3);

const str = "12345";
const arr2 = ["1", "2", "3", "4", "5"];

const result4 = arr2.slice.apply(str, [1]);
console.log(result4, "result");

const objFromArray = ["H", "e", "l", "l", "o"].reduce((acc, e, i) => {
  acc[i] = e;
  return acc;
}, {});

console.log(objFromArray, "!!!!");

const keys = Object.keys(objFromArray);

console.log(keys, "keys");

// Завдання:

function Car(color) {
  this.color = color;
  this.ride = function (d) {
    this.distance += d;
  };

  return this;
}

console.log(new Car("purple"), "new  Car");

// object with method
const car = {
  color: "red",
  name: "Mazda rx-6",
  price: 13000,
  distance: 0,
  turbo: 1.1,

  ride: function (d) {
    this.distance += d;
  },
};

console.log(car, "car");

const sportCar = {
  color: "black",
  name: "Ford Mustang",
  price: 40000,
  distance: 0,
  turbo: 1.2,

  turboRide: function (d) {
    car.ride.apply(this, [d * this.turbo]);
    // Завдання:
    // Реалізуйте функцію turboRide на основі функції ride іншої машини
    // d = d * 1.2
  },
};

sportCar.turboRide(100);
// car.ride(100);

console.log(sportCar);
console.log(car);

car.turboRide = sportCar.turboRide;

car.turboRide(100);
console.log(car);
console.log(sportCar);

// Завдання:
// Зробіть з car спортивну машину (передайте їй функціонал методу turboRide)

// (1 + 2) * 3(a || a > 0) && !b;

// anonim self-called function
((a, b) => console.log(a + b))(10, 20);

(() => {
  const a = 10;
  const b = 20;
  return a + b;
})();

console.log(
  (function (a, b) {
    return a + b;
  })(10, 20)
);

function Car(brand, model) {
  this.brand = brand;
  this.model = model;

  this.showCar = function () {
    console.table(this);
  };

  return this;
}

Car.prototype.showCar = function () {
  console.table(this);
};

function Animal(breed, color) {
  this.breed = breed;
  this.color = color;

  this.isMadeByAnimal = function () {
    return Boolean(this.color);
  };

  return this;
}

Animal.prototype.isMadeByAnimal = function () {
  return Boolean(this.color);
};

Car.prototype = Animal.prototype;

const audiCar = new Car("Audi", "A4");
const catAnimal = new Animal("Cat", "white");

catAnimal.showCar = audiCar.showCar.bind(catAnimal);

// console.log(audiCar.brand);
// console.log(audiCar.color);
audiCar.showCar();
console.log(audiCar.isMadeByAnimal());
catAnimal.isMadeByAnimal();
console.log(catAnimal.breed);
console.log(catAnimal.color);
catAnimal.isMadeByAnimal();
console.log(catAnimal.isMadeByAnimal());
catAnimal.showCar(); //почему здесь выдает ошибку?

function abc(bool) {
  console.log(bool);
}

const fn10 = abc;
11 > 10 ? console.log("QQQQ") : console.log("!!!!");

this.a += 1;
this.a++;
this.a = this.a + 1;
