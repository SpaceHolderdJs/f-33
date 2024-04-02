// data structure

Array;
Object;
Set;
Map;

// List, Array, Queue, LinkedList, Object, HashMap, Map, Literal;

const arrOfNumbers = [1, 2, 3, 4, 5];
const objOfNumbers = {
  0: 1,
  1: 2,
  2: 3,
  3: 4,
  4: 5,
};

console.log(arrOfNumbers[0], objOfNumbers[0]);

// Set
const set = new Set();

set.add(1);
set.add(2);

console.log(set);

set.delete(2);

console.log(set, "set", set.has(100));
console.log(set.size);

const obj = { name: "Igor" };

set.add(obj);
set.add({ name: "Igor" });
set.delete(obj);

console.log(set, "set", set.has(obj));

// Завдання:
// створити Set з значеннями: "Igor", "Olena", "Alex", "Maya"
// Додавати значення по одному (add);

// Перевірте наявність свого імені у Set
// Видаліть одне з імен

// [].forEach((e, i ,arr) => {})

set.forEach((value) => {
  console.log(value);
});

const myEvent = {
  title: "Event",
  date: new Date(),
  members: new Set(["user-1", "user-2", "user-3"]),
};

myEvent.members.add("user-4");
myEvent.members.add("user-2");
myEvent.members.add({ name: "Igor" });

console.log(myEvent);

// too long, undesired
// const members = [];
// if (!members.includes("user-1")) {
//   members.push("user-1");
// }

console.log(
  [...set.entries()].forEach((pairs) => console.log(pairs[0], "pair"))
);

console.log(set.keys(), "keys");
console.log(set.values(), "values");
console.log(set, "set");

for (const value of set) {
  console.log("values", value);
}

// wont work
// for (const key in set) {
//   console.log("key", key);
// }

// Map
Map;

const map = new Map();
console.log(map, "map");

map.set("data", 10);
map.set("data", 15);

map.delete("data");

map.set("newData", 20);
map.set(100, "100");

const arrayAsKey = [1, 2, 3, 4, 5];
map.set(arrayAsKey, [5, 4, 3, 2, 1]);

console.log(map.size, "map size");
console.log(map.get("newData"), "newData");
console.log(map.get(100), "anotherValue");

console.log(map.get(arrayAsKey), "array as a key");

map.forEach((value, key, map) => {
  console.log(value, key, map, "!!!");
});

const car = {
  name: "Toyota GT",
  color: "white",
  price: 15000,
};

const accidents = [
  { id: 1, autoId: 1, damage: 3, location: "New York" },
  { id: 2, damage: 1, location: "Los Angeles" },
];

const carDB = new Map();
carDB.set(car, accidents);

console.log(carDB, "carDB");

carDB.forEach((accidents, car) => {
  document.body.innerHTML += `
    <div>
        <h2>${car.name}</h2>
        <div>${car.color}</div>
        <p>${car.price}</p>
        <div>${accidents.map(
          (accident) => `<div>${accident.damage} ${accident.location}</div>`
        )}
        </div>
    </div>
    `;
});

console.log([...new Set([1, 2, 1, 1])]);
