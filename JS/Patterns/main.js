// Pattern

// Fabric

const data = [
  { name: "Igor", age: 24, isAdmin: true },
  { name: "Elena", age: 30, isAdmin: false },
  { name: "Alex", age: 28, isAdmin: true },
  { name: "Maria", age: 22 },
  { name: "Dmitry", age: 26, isAdmin: true },
  { name: "Olga", age: 35 },
  { name: "Viktor", age: 31, isAdmin: true },
  { name: "Natalia", age: 29, isAdmin: false },
  { name: "Andrei", age: 27, isAdmin: true },
  { name: "Svetlana", age: 25 },
  { name: "Ivan", age: 33, isAdmin: true },
];

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  info() {
    console.log(this);
  }
}

class Admin extends Person {
  constructor(name, age, isAdmin) {
    super(name, age);
    this.isAdmin = isAdmin;
  }
}

class Fabric {
  constructor(data) {
    const { name, age, isAdmin } = data;

    if (isAdmin) {
      return new Admin(name, age, isAdmin);
    }

    return new Person(name, age);
  }
}

const users = data.map((userData) => new Fabric(userData));
console.log(users, "users");
users.forEach((user) => user.info());

// const person = new Person("Igor", 24);
// console.log(person);

// console.log(person instanceof Person);
// console.log(person instanceof Object);
// console.log(person instanceof String);

const places = [
  {
    name: "The Rusty Spoon",
    address: "123 Main St, Cityville",
    feedbacks: [
      { mark: 8, visitor: "John" },
      { mark: 9, visitor: "Alice" },
      { mark: 7, visitor: "Emma" },
    ],
  },
  {
    name: "Taste of Tuscany",
    address: "456 Elm St, Townsville",
    feedbacks: [
      { mark: 9, visitor: "Michael" },
      { mark: 10, visitor: "Sophia" },
      { mark: 8, visitor: "David" },
    ],
  },
  {
    name: "Spice Paradise",
    address: "789 Oak Ave, Villageton",
    feedbacks: [
      { mark: 7, visitor: "Linda" },
      { mark: 8, visitor: "Robert" },
      { mark: 6, visitor: "Grace" },
    ],
  },
  {
    name: "Mango Tango",
    address: "101 Pine Blvd, Riverside",
    feedbacks: [
      { mark: 8, visitor: "Daniel" },
      { mark: 7, visitor: "Jessica" },
      { mark: 9, visitor: "William" },
    ],
  },
  {
    name: "Sushi Sensation",
    address: "222 Maple Dr, Lakeside",
    feedbacks: [
      { mark: 9, visitor: "Olivia" },
      { mark: 8, visitor: "Ethan" },
      { mark: 10, visitor: "Ava" },
    ],
  },
  {
    name: "La Piazza",
    address: "333 Cedar Rd, Mountainview",
    feedbacks: [
      { mark: 10, visitor: "Noah" },
      { mark: 9, visitor: "Isabella" },
      { mark: 9, visitor: "Mason" },
    ],
  },
  {
    name: "Fire & Grill",
    address: "444 Birch Lane, Seaview",
    feedbacks: [
      { mark: 7, visitor: "Sophie" },
      { mark: 8, visitor: "Logan" },
      { mark: 6, visitor: "Emily" },
    ],
  },
  {
    name: "Thai Orchid",
    address: "555 Willow Way, Parkside",
    feedbacks: [
      { mark: 8, visitor: "Benjamin" },
      { mark: 9, visitor: "Charlotte" },
      { mark: 7, visitor: "James" },
    ],
  },
  {
    name: "Steakhouse Supreme",
    address: "666 Oakwood Ave, Hilltop",
    feedbacks: [
      { mark: 9, visitor: "Harper" },
      { mark: 8, visitor: "Lucas" },
      { mark: 9, visitor: "Ella" },
    ],
  },
  {
    name: "Café del Sol",
    address: "777 Sunlight Blvd, Lakeshore",
    feedbacks: [
      { mark: 1, visitor: "Jackson" },
      { mark: 1, visitor: "Amelia" },
      { mark: 2, visitor: "Alexander" },
    ],
  },
];

class Place {
  constructor(name, address, rating) {
    this.name = name;
    this.address = address;
    this.rating = rating;

    // H/W: Add singleton pattern (Counter) - one for all the restaurants
    this.visitors;
  }

  visit() {
    // Дописати visit врахувавши counter
    console.log(`You are visiting ${this.name}, ${this.address}`);
  }
}

class Restaurant extends Place {
  constructor(name, address, rating) {
    super(name, address, rating);
  }
}

class Caffe extends Place {
  constructor(name, address, rating) {
    super(name, address, rating);
  }

  visit() {
    console.log(`Warning! This place is medium-rated!`);
    console.log(`You are visiting ${this.name}, ${this.address}`);
  }
}

class Bistro extends Place {
  constructor(name, address, rating) {
    super(name, address, rating);
  }

  visit() {
    console.log(`Warning! This place is low-rated! ${this.name}`);
  }
}

class Fabric2 {
  static criteria = {
    high: 7,
    medium: 5,
    low: 1,
  };

  constructor(data) {
    const { name, address, feedbacks } = data;

    const rating = this.calculateRating(feedbacks);

    if (rating < Fabric2.criteria.medium) {
      return new Bistro(name, address, rating);
    }

    // [Note]: Chechcking the  rating
    if (rating < Fabric2.criteria.high) {
      return new Caffe(name, address, rating);
    }

    // [Warining!]: Please use it carefully
    return new Restaurant(name, address, rating);
  }

  calculateRating(feedbacks) {
    return (
      feedbacks.reduce((acc, fb) => (acc += fb.mark), 0) / feedbacks.length
    );
  }
}

const finalPlaces = places.map((place) => new Fabric2(place));
console.log(finalPlaces, "finalPlaces");

// H/W: Перевірити visit з counter
finalPlaces.forEach((place) => place.visit());

// Middleware (interceptor - consumer)

const connection = {
  port: 0,
  isAlive: false,
};

const middlewares = {
  init: (connection) => {
    const port = Math.floor(Math.random() * 10000);
    connection.port = port;

    return connection;
  },
  enable: (connection) => {
    connection.isAlive = true;

    return connection;
  },
  addDevice: (connection, device) => {
    if (!connection.devices) connection.devices = [];

    connection.devices.push(device);

    return connection;
  },
  removeDevice(connection, device) {
    if (!connection.devices) return connection;

    connection.devices = connection.devices.filter((d) => device.id !== d.id);
    return connection;
  },
  close(connection) {
    if (connection.devices) delete connection.devices;
    connection.isAlive = false;

    return connection;
  },
};

const initedConnection = middlewares.init(connection);
console.log(initedConnection, "inited");

const enabled = middlewares.enable(initedConnection);
console.log(enabled, "enabled");

middlewares.addDevice(connection, { id: 1, name: "Samsung" });
middlewares.close(connection);
middlewares.removeDevice(connection, { id: 1, name: "Samsung" });

console.log(connection, "connection");

const { init, close, enable } = middlewares;

close(enable(init(connection)));
console.log(connection, "!!!");

// Singleton

function Counter(value) {
  this.value = value;

  // Is undefined
  // Counter.instance = undefined;

  this.add = function (value) {
    this.value += value;
    return this.value;
  };

  this.diff = function (value) {
    this.value -= value;
    return this.value;
  };

  this.clear = function () {
    this.value = 0;
    return this.value;
  };

  if (!Counter.instance) Counter.instance = this;

  return Counter.instance || this;
}

const counter = new Counter(10);
counter.add(10);
counter.diff(20);
counter.add(90);

const anotherCounter = new Counter(15);

console.log(counter, "counter");
console.log(anotherCounter, "anotherCounter");

class Restaurant2 {
  constructor(name, address, visitors) {
    this.name = name;
    this.address = address;

    // check if counter is exists
    this.visitors = Counter.instance || new Counter(visitors);
  }
}

const restaurant = new Restaurant2("Wery well cafe", "st bd -1-1-1-1", 10);

console.log(restaurant, "restaurant with counter");

const newVisitors = restaurant.visitors.add(20);
console.log(newVisitors, "visitors");

function a(v) {
  this.v = v;
  console.log("a");
}

a();

console.log(new a(1000));

a.myValue = "myValue";

class C {
  static data = [];
}

const c = new C();
console.log(c, "!!!");
// console.log(C.data);

const b = {};

console.log({ ...a }, b);
