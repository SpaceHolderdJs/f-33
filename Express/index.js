const express = require("express");
const cors = require("cors");

const app = express();
const port = 8888;

const data = {
  users: [
    { name: "Igor", age: 24 },
    { name: "Alex", age: 18 },
  ],
  posts: [
    { title: "Post1", text: "Text" },
    { title: "Post2", text: "Text" },
  ],
};

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.json({ message: "Hello", age: 24 });
});

// users
app.get("/users", (req, res) => {
  res.json(data.users);
});

app.post("/users", (req, res) => {
  const user = req.body;
  data.users.push(user);

  res.json(data.users);
});

// posts
app.get("/posts", (req, res) => {
  res.json(data.posts);
});

app.post("/posts", (req, res) => {
  const post = req.body;
  data.posts.push(post);

  res.json(data.posts);
});

app.listen(port, () => {
  console.log(`Express server is running on port: ${port}`);
});
