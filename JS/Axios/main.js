// fetch vs axios

// get
fetch("https://jsonplaceholder.typicode.com/todos/1", { method: "GET" })
  .then((response) => response.json())
  .then((data) => console.log(data));

// patch
fetch("https://jsonplaceholder.typicode.com/todos/1", {
  method: "PATCH",
  body: JSON.stringify({
    id: 1,
    userId: 1,
    title: "New title",
    text: "New text",
  }),
})
  .then((response) => response.json())
  .then((data) => console.log(data, "response after updates"));

// get
axios
  .get("https://jsonplaceholder.typicode.com/todos/1")
  .then((response) => console.log(response.data, "response with axios"));

// patch
axios
  .patch("https://jsonplaceholder.typicode.com/todo", {
    id: 1,
    userId: 1,
    title: "Hello",
    text: "New text",
  })
  .then((response) => {
    console.log(response.data, "response from axios after updates");
  })
  .catch((error) => {
    // if (error.response.status === 404) alert("Not found error");
    console.log(error.response.status);
  });

// Best way to handle forms!

const form = document.querySelector("#form");

form.onsubmit = (e) => {
  e.preventDefault();

  axios
    .post("https://jsonplaceholder.typicode.com/todos", form, {
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((response) => console.log(response, "sent the form"))
    .catch((err) => console.log(err));
};

// another syntax
axios({
  method: "GET",
  url: "https://jsonplaceholder.typicode.com/todos",
}).then((response) => console.log(response, "another syntax"));

// setting up custom API

const mainUrl = "https://jsonplaceholder.typicode.com";

const instanse = axios.create({
  baseURL: mainUrl,
});

async function getAllData() {
  //   const { data: users } = await instanse.get("/users");
  //   const { data: todos } = await instanse.get("/todos");
  //   const { data: posts } = await instanse.get("/posts");
  //   const { data: comments } = await instanse.get("/comments");
  //   const { data: photos } = await instanse.get("/photos");

  //   console.log(users, "users");
  //   console.log(todos, "todos");
  //   console.log(posts, "posts");
  //   console.log(comments, "comments");
  //   console.log(photos, "photos");

  // 1 way

  //   return {
  //     users,
  //     todos,
  //     posts,
  //     comments,
  //     photos,
  //   };

  // 2 way
  const dataToget = [
    "users",
    "todos",
    "photos",
    "posts",
    "comments",
    "comments/1",
  ];

  return await Promise.all(dataToget.map((link) => instanse.get(`/${link}`)));
}

getAllData().then((information) => {
  const [users, todos, photos, posts, comments, firstComment] = information.map(
    (response) => response.data
  );

  console.log(users, todos, photos, posts, comments, firstComment);
});
