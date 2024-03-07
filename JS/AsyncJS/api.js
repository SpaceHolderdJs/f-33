fetch("").then().catch();

// 1. Async functions

// 2. API requests

// es6 - es7
Promise;
new Promise((res, rej) => {}).then().catch();

// es-8 - es-9
// async, await

new Promise((res) => {
  res("Default promise");
}).then((data) => console.log(data));

async function promiseFunction() {
  return "Async function";
}
promiseFunction().then((data) => console.log(data));

const arrowPromiseFunction = async () => "Async arrow function";
arrowPromiseFunction().then((data) => console.log(data));

// fetch, ...

// API
// GET, POST, PATCH, PUT, DELETE

// GET
fetch(`https://jsonplaceholder.typicode.com/users`, { method: "GET" });

// POST
fetch(`https://jsonplaceholder.typicode.com/users`, {
  method: "POST",
  headers: {
    "Content-type": "application/json",
  },
  body: JSON.stringify({ name: "Igor" }),
}).then((response) => console.log(response));

// PATCH
fetch(`https://jsonplaceholder.typicode.com/users/1`, {
  method: "PATCH",
  headers: {
    "Content-type": "application/json",
  },
  body: JSON.stringify({ name: "Igor" }),
}).then((response) => console.log(response));

// PUT
fetch(`https://jsonplaceholder.typicode.com/users/1`, {
  method: "PUT",
  headers: {
    "Content-type": "application/json",
  },
  body: JSON.stringify([{ name: "Igor" }, { name: "Oleg" }]),
}).then((response) => console.log(response));

// DELETE
fetch(`https://jsonplaceholder.typicode.com/users/1`, {
  method: "DELETE",
}).then((response) => console.log(response, "delete"));

function addUser(user) {
  fetch(`https://jsonplaceholder.typicode.com/users`, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(user),
  }).then((response) => console.log(response));
}

addUser({ name: "Igor" });

[{ name: "Igor" }, { name: "Igor" }, { name: "Igor" }].forEach((user) =>
  addUser(user)
);

class API {
  constructor(rootUrl, defaultHeaders) {
    this.rootUrl = rootUrl;
    this.defaultHeaders = defaultHeaders;
  }

  async request(subUrl = "", headers = null, method = "GET", body = null) {
    const response = await fetch(`${this.rootUrl}${subUrl}`, {
      headers: headers || this.defaultHeaders,
      method,
      body: body ? JSON.stringify(body) : null,
    });

    if (response.body) {
      return await response.json();
    }

    return response;
  }

  async get(subUrl = "", headers = null) {
    return await this.request(subUrl, headers);
  }

  async post(subUrl = "", headers = null, body = null) {
    return await this.request(subUrl, headers, "POST", body);
  }

  async patch(subUrl = "", headers = null, body = null) {
    return await this.request(subUrl, headers, "PATCH", body);
  }

  async put(subUrl = "", headers = null, body = null) {
    return await this.request(subUrl, headers, "PUT", body);
  }

  async delete(subUrl = "", headers = null) {
    return await this.request(subUrl, headers, "DELETE");
  }
}

const jsonplaceholderAPI = new API("https://jsonplaceholder.typicode.com", {
  "Content-Type": "application/json",
});

jsonplaceholderAPI.get("/users").then((data) => console.log(data, "users"));

jsonplaceholderAPI
  .patch("/users/1", null, { name: "Igor", age: 24, phone: "095-4321-23113" })
  .then((resposne) => console.log(resposne, "patch users"));

jsonplaceholderAPI.get("/todos").then((data) => console.log(data, "todos"));

const fakeStoreApi = new API("https://fakestoreapi.com", {
  "Content-Type": "application/json",
});

fakeStoreApi.get("/products").then((data) => console.log(data, "products"));

class UsersAPI extends API {
  constructor(
    baseUrl = "https://jsonplaceholder.typicode.com/users",
    defaultHeaders = {
      "Content-Type": "application/json",
    }
  ) {
    super(baseUrl, defaultHeaders);
  }

  async getById(id) {
    return await this.get(`/${id}`);
  }
}

const usersAPI = new UsersAPI();

usersAPI.getById(1).then((user) => console.log(user, "user by id 1"));
