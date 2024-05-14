fetch("http://localhost:8888/users")
  .then((res) => res.json())
  .then((data) => console.log(data, "users"));

fetch("http://localhost:8888/users", {
  method: "POST",
  headers: {
    "Content-type": "Application/json",
  },
  body: JSON.stringify({
    name: "User from fetch",
    age: 16,
  }),
})
  .then((res) => res.json())
  .then((data) => console.log(data, "users"));
