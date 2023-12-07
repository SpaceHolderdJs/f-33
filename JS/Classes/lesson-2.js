class Animal {
  constructor(type, name, color) {
    this.type = type;
    this.name = name;
    this.color = color;

    return this;
  }

  walk() {
    console.log(`The animal ${this.name} is walking`);
  }

  voice(message) {
    console.log(`The animal ${this.name} is saying ${message}`);
  }
}

const cat = new Animal("cat", "Myrzik", "grey");
cat.walk();
cat.voice("Meow - Meow");

console.log(cat instanceof Animal, 1);

const dog = new Animal("dog", "Richard", "white");
dog.walk();
dog.voice("Gav - Gav");

class Fish extends Animal {
  //   constructor() {}

  // method overrinding
  voice() {
    console.error(`The fish is not talking!`);
  }

  walk() {
    console.error(`The fish is not walking!`);
  }

  swim() {
    console.log(`The Fish ${this.name} is swimming`);
  }
}

Fish.prototype.sleep = function () {
  console.log(`The fish ${this.name} is sleeping`);
};

const fish = new Fish("fish", "Rebecca", "blue");
fish.walk();
fish.voice();
fish.swim();
fish.sleep();

console.log(fish instanceof Animal, 2);
console.log(fish instanceof Object, 3);
console.log("" instanceof Object, 4);

console.log(typeof "", 5);

class Pet extends Animal {
  constructor(type, name, color, isPet = true) {
    super(type, name, color);

    this.isPet = isPet;

    return this;
  }

  isPetAnimal() {
    return this.isPet;
  }

  meetHomemate() {
    super.walk();
    super.voice("Welcome home!");
  }
}

const petCat = new Pet("cat", "Barsik", "BROWN", true);
petCat.voice("Meow - home - meow");
petCat.walk();
petCat.meetHomemate();
console.log(petCat.isPetAnimal());

Array.prototype.map = function () {
  console.log(this);
};

class SuperArray extends Array {
  isSuperArray() {
    return true;
  }

  map() {
    console.log();
  }

  forEachWithBreak(callback) {
    let shouldStop = false;
    const stopLoop = () => (shouldStop = true);

    for (let i = 0; i < this.length; i++) {
      if (shouldStop) return;
      callback(this[i], i, this, stopLoop);
    }
  }
}

const superArray = new SuperArray(5).fill("supper-array");
const array = new Array(5).fill("array");

console.log(superArray.isSuperArray(), "isSuperArray");

console.log(superArray, array);

array.forEach((e, i, arr) => console.log(e, i, arr, "regular foreach"));

superArray.forEachWithBreak((e, i, arr, stop) => {
  if (i > 1) stop();
  console.log(e, i, arr, "foreach with break");
});

function a() {
  for (const el of [1, 2, 3, 4, 5]) {
    return;
  }
}

console.log(array instanceof Array, 1);
console.log(superArray instanceof SuperArray, 2);
console.log(superArray instanceof Array, 3);
