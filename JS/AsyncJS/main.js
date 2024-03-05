// JSON.parse();
// JSON.stringify();
// JSON - JavaScript Object Notation
const data = [
  { name: "Igor", age: 24 },
  { name: "Alex", age: 30 },
];

console.log(JSON.stringify(data));

// Promise
Promise;

// resolve - positive action
// reject - negative action

// Promise states:
// 1. Pending - the promise is in process
// 2. Fulfilled - the promise is done and the result is available
// 3. Rejected - the promise was failed (any reason)

const firstPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Hello from promise");
    // reject("Failed to load the promise");
  }, 5000);
});

console.log(firstPromise);

firstPromise.then((data) => {
  console.log(data, "data from Promise");
  console.log("HEllo");
});

const secondPromise = new Promise((res, rej) => {
  res("Second promise");
});

secondPromise.then((message) => {
  console.log(message);
});

console.log("After promise");

// Promise.race - one (the first promise is done)
// Promise.all - all the promises are done

Promise.race([
  new Promise((r) => r(1)),
  new Promise((r) => r(2)),
  new Promise((r) => r(3)),
]).then((d) => console.log(d));

class Car {
  constructor(brand, color, year) {
    this.brand = brand;
    this.color = color;
    this.year = year;

    this.finishTime = Math.floor(Math.random() * 5000);

    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(this);
      }, this.finishTime);
    });
  }
}

Promise.race([
  new Car("Ford Mustang GT", "black", 1976),
  new Car("Dodge Charger", "grey", 2001),
  new Car("Chevrolet Camaro", "yellow", 2011),
]).then((winner) => console.log("The winner is:", winner));

Promise.all([
  new Car("Ford Mustang GT", "black", 1976),
  new Car("Dodge Charger", "grey", 2001),
  new Car("Chevrolet Camaro", "yellow", 2011),
]).then((d) => console.log(d));

new Promise((res, rej) => {
  rej("Promise failed");
})
  .then((d) => console.log(d, "fulfilled promise"))
  .catch((d) => console.log(d, "rejected promise"));

//  users logic

document.body.innerHTML += `<h1>Loading the users</h1>`;

fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((data) => {
    document.body.innerHTML = "";

    data.forEach((user) => {
      const { email, phone, name } = user;
      console.log(email, phone, name);

      document.body.innerHTML += `
        <div>
            <h4>${name}</h4>
            <p>${email}</p>
            <p>${phone}</p>
        </div>
      `;
    });
  })
  .catch((error) => {
    document.body.innerHTML = `<h1>Request failed, try later</h1>`;
    console.log(error);

    // setTimeout(() => {
    //   // re-fetch
    // }, 5000);

    // window.location.reload();
  });
