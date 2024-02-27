// LocalStorage
// SessionStorage

String;
JSON;

localStorage.setItem("message", "Hello user");
localStorage.setItem("email", "email@gmail.com");
localStorage.setItem("lastPage", 147);

// Not valid way ([object Object])
localStorage.setItem("user", { name: "Igor", age: 24 });
console.log(String({ a: 10 }));

const message = localStorage.getItem("message");
console.log(message, "message");

const message2 = localStorage.getItem("message2");
console.log(message2);

const lastPage = localStorage.getItem("lastPage");
console.log(lastPage, "!!!!");

if (message2) {
  // logic...
}

localStorage.removeItem("lastPage");

// JSON.parse();
const stringedObject = JSON.stringify({ a: 10 });
console.log(stringedObject);

localStorage.setItem("data", stringedObject);

const jsonData = localStorage.getItem("data");
const data = JSON.parse(jsonData);
console.log(data);

// Завдання: записати занчення user у LS
// localStorage.setItem("user", { name: "Igor", age: 24 });

const inputs = {
  name: document.querySelector("#name-input"),
  email: document.querySelector("#email-input"),
  password: document.querySelector("#password-email"),
};

const button = document.querySelector("#submit-button");

const nameLS = localStorage.getItem("name");
const emailLS = localStorage.getItem("email");

if (nameLS) {
  inputs.name.value = nameLS;
}

if (emailLS) {
  inputs.email.value = emailLS;
}

button.onclick = () => {
  const name = inputs.name.value;
  const email = inputs.email.value;

  localStorage.setItem("name", name);
  localStorage.setItem("email", email);

  alert("Login is done");
};
