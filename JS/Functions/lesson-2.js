function Car(name, brand, color, price) {
  this.name = name;
  this.brand = brand;
  this.color = color;
  this.price = price;
  this.distance = 0;

  this.showData = function () {
    console.table(this);
  };

  return this;
}

Car.prototype.showData = function () {
  console.table(this);
};

Car.prototype.ride = function (distance) {
  this.distance += distance;
};

function Ford(name, brand, color, price, fordId) {
  this.name = name;
  this.brand = brand;
  this.color = color;
  this.price = price;
  this.distance = 0;

  this.fordId = fordId;

  this.isMadeByFord = function () {
    return Boolean(this.fordId);
  };

  return this;
}

// extends
Ford.prototype = Car.prototype;

const mazda = new Car("rx-6", "Mazda", "red", 15000);

const ford = new Ford("Mustang", "Ford", "black", 50000, "ford-446545647");

console.log(mazda, "Mazda");
console.log(ford, "Ford");

ford.ride(200);
console.log(ford, "Ford after ride");
mazda.showData();
ford.showData();

const isFord = ford.isMadeByFord();
console.log(isFord, "isFord");

// mazda.isFord(); - will produce error

// Завдання:
//  - Інінціалізуйте поля банків
//  - Забезпечте протип конструктора Bank функціональністю (showData, addBalance(value))
//  - Наслідуйте прототип Bank для Monobank
//  - Використайе методи банку у екземплярі конструктора Monobank
function BankCard(number, budget, bank) {
  this.number = number;
  this.budget = budget;

  // bank instance
  this.bank = bank;

  this.increaseBalance = function (amount) {
    this.budget = this.budget + amount;
    this.bank.calculateBudget();
  };

  this.derceaseBalance = function (amount) {
    this.budget = this.budget - amount;
    this.bank.calculateBudget();
  };

  this.destory = function () {
    this.bank.cards = this.bank.cards.filter(
      (card) => card.number !== this.number
    );

    this.bank.calculateBudget();
  };

  this.bank.registerCard(this);

  return this;
}

function Bank(name, budget) {
  this.name = name;
  this.budget = budget;
  //   this.cards = [];

  return this;
}

function Monobank(name, budget, cards = []) {
  this.name = name;
  // based on budgets of each card of the bank
  this.budget = budget;

  this.cards = cards;

  // private
  this.calculateBudget = function () {
    this.budget = this.cards.reduce((sum, card) => (sum += card.budget), 0);
  };

  this.registerCard = function (card) {
    this.cards.push(card);
    this.calculateBudget();
  };

  return this;
}

Monobank.prototype.cards = [];

// public
Monobank.prototype.registerCard = function (card) {
  this.cards.push(card);
  this.calculateBudget();
};

Monobank.prototype.calculateBudget = function () {
  this.budget = this.cards.reduce((sum, card) => (sum += card.budget), 0);
};

Bank.prototype = Monobank.prototype;

const simpleBank = new Bank("bank", 0);

const simpleCard = new BankCard("12345678", 1000, simpleBank);

const monoBank = new Monobank("mono-1", 0);

console.log(Monobank, "monobank");

const card1 = new BankCard("4444673231", 200, monoBank);
const card2 = new BankCard("4412434342", 500, monoBank);

console.log(monoBank, "monoBank");

card1.increaseBalance(5000);
console.log(monoBank, "monoBank after card balance increase");

card2.derceaseBalance(200);
console.log(monoBank, "monoBank after card balance decrease");

card1.destory();
console.log(monoBank, "monoBank after card1 deletion");

console.log(window, "window", this);

// no this own value
const ArrowFunction = (name) => {
  this.name = name;
  //   window
  console.log(this);
  return this;
};

ArrowFunction("Igor");

// scope
function Construct(name, multiplicator = 10) {
  this.name = name;
  this.multiplicator = multiplicator;

  this.sowName = () => {};

  //   this (instance with name)
  this.showName = function () {
    this.array = [1, 2, 3];
    const result = this.array.map((e) => e * this.multiplicator);

    const arrow = () => {
      console.log("arrow fn");
    };

    arrow();

    this.array = result;
    // console.log(this.name, "!!!");
  };

  //   wrong way
  //   this.showName = () => {
  //     console.log(this.name, "!!!");
  //   };

  return this;
}

new Construct("Igor");

//
