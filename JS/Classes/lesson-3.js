// class C {}
// function C() {}

// const C = function () {};

const classC = class {
  constructor(a, b) {
    this.a = a;
    this.b = b;
  }

  showA() {
    console.log(this.a);
  }
};

const cInstance = new classC(10, 12);
cInstance.showA();

function carFabric(wheels) {
  if (wheels === 2) {
    return class Bike {
      constructor(color, brand, price) {
        this.color = color;
        this.brand = brand;
        this.price = price;
      }

      ride() {
        console.log(`This is bike ${this.brand}, it's riding.`);
      }
    };
  }

  if (wheels >= 4) {
    return class Car {
      constructor(color, speed, doors) {
        this.color = color;
        this.speed = speed;
        this.doors = doors;
      }

      ride() {
        console.log(`This is car ${this.color}, it's riding.`);
      }
    };
  }
}

const BikeClass = carFabric(2);
const CarClass = carFabric(4);

new BikeClass("red", "kellys", 1500).ride();
new CarClass("blue", 200, 4).ride();

const array = new Array(5);
array.fill("1");

class Person {
  // ------- for Person (global class)
  static persons = [];

  static birthdayAll = () =>
    Person.persons.forEach((person) => person.birthday());

  // ------- for new Person() (instance)

  constructor(name, age) {
    this.name = name;
    this.age = age;

    Person.persons.push(this);
  }

  info() {}

  birthday() {
    this.age++;
    console.log(`This is ${this.age}, birthday of ${this.name}`);
  }
}

const person1 = new Person("Igor", 24);
const person2 = new Person("Maya", 18);

console.log(Person.birthdayAll());
// console.log(Person.hello());
// Array.isArray();

function PersonFn(name, age) {
  PersonFn.persons = [];
  PersonFn.birthdayAll = () =>
    PersonFn.persons.forEach((person) => person.birthday());

  this.name = name;
  this.age = age;

  this.birthday = function () {
    this.age++;
    console.log(`This is ${this.age}, birthday of ${this.name}`);
  };

  PersonFn.persons.push(this);

  return this;
}

const personFn1 = new PersonFn("Arsen", 24);
const personFn2 = new PersonFn("Olena", 18);

PersonFn.birthdayAll();

class PrivatePerson extends Person {
  #cardNumber;

  constructor(name, age, cardNumber) {
    super(name, age);

    // private
    this.#cardNumber = cardNumber;
  }

  #getCardNumber() {
    return this.#cardNumber;
  }

  changeCardNumber(number) {
    this.#cardNumber = number;
    console.log(this.#getCardNumber(), "new number");
  }
}

const privatePerson = new PrivatePerson("Igor", 24, "454508671234");
console.log(privatePerson, "privatePerson");

console.log(privatePerson.name, "name");
console.log(privatePerson.age, "age");

// Error!!!
// console.log(privatePerson.#cardNumber, "cardNumber");

privatePerson.changeCardNumber("54540000000");

console.log(privatePerson);

// Завдання:
// Створіть класс BankCard (owner, number, budget, cvv, pin)
// Зробіть приватними дані: pin, cvv
// Напишіть метод що буде змінювати pin (oldPin, newPin) (перевірка старого пін код)
// Реєструйте всі картки у статичній змінній вашого класу

class Coords {
  constructor(x, y, z) {
    this.x = x;
    this.y = y;
    this.z = z;
  }

  // getter
  // setter

  //   get x() {
  //     return `${this.x}`;
  //   }

  //   set x(value) {
  //     value;
  //   }
  //   set
}

const coords1 = new Coords(10, 5, 3);
console.log(`${coords1.x}`);
// coords1.x = 200;

const obj = {
  x: 10,
  y: 20,

  "get x": function () {
    return this.x + 1;
  },
  "set x": function (x) {
    x + 1;
  },
};

console.log(obj["get x"]());

class A {
  constructor(a) {
    this.a = a;
  }

  get a() {
    return this._a;
  }

  set a(newA) {
    this._a = newA + 1;
  }
}
const a = new A(10);
console.log(a.a, "a");

a.a = 100;

console.log(a);
