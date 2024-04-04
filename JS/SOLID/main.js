// SOLID

// Single responsibility principe
// Open - closed principe
// Liskov substitution principe
// Interface segregation principe
// Dependency inversion principe

// S

class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;

    // title, text, image, likes
    this.posts = [
      { title: "Title", text: "Text..", image: "img.png", likes: 1 },
    ];
  }

  changeEmail(email) {
    this.email = email;
  }

  changeName(name) {
    this.name = name;
  }

  addPost(title, text, image, likes) {
    this.posts.push({ title, text, image, likes });
  }

  deletePost(title) {
    this.posts = this.posts.filter((post) => post.title !== title);
  }
}

const user1 = new User("User1", "email@gmail.com");

// Fixes

class BetterUser {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }

  changeName(name) {
    this.name = name;
  }

  changeEmail(email) {
    this.email = email;
  }
}

class BetterPost {
  static posts = [];

  constructor({ title, text, image, likes, user }) {
    this.title = title;
    this.text = text;
    this.image = image;
    this.likes = likes;
    this.user = user;

    this.id = BetterPost.posts.length;

    BetterPost.posts.push(this);
  }

  deletePost(id) {
    BetterPost.posts = BetterPost.posts.filter((post) => post.id !== id);
  }
}

const betterUser = new BetterUser("User2", "email2@gmail.com");

const post = new BetterPost({
  title: "Post2",
  text: "Text",
  image: "img.png",
  likes: 0,
  user: betterUser,
});

console.log(BetterPost.posts, "posts");

// O

// Changes:

// 1. Immediate change :( => side effects
// 2. Extends change

class User1 {
  static users = [];

  constructor(email, isAdmin = false) {
    this.email = email;
    this.isAdmin = isAdmin;

    User1.users.push(this);
  }

  changeEmail(email) {
    if (this.isAdmin) {
      this.email = email;
    }
  }

  deleteUser(user) {
    if (this.isAdmin) {
      User1.users = User1.users.filter((u) => u.email !== user.email);
    }
  }
}

const user2 = new User1("email@gmail.com");
user2.changeEmail("email_changed@gmail.com");
const admin = new User1("admin@gmail.com", true);

console.log(user2, admin, User1.users);

class BetterUser1 {
  static users = [];

  constructor(email) {
    this.email = email;
    User1.users.push(this);
  }

  changeEmail(email) {
    this.email = email;
  }
}

class Admin extends User1 {
  static admins = [];
  constructor(email) {
    super(email);
    this.isAdmin = true;

    Admin.admins.push(this);
  }

  deleteUser(user) {
    User1.users = User1.users.filter((u) => u.email !== user.email);
  }
}

new Admin("admin2@gmail.com");

// Liskov substitution

const obj1 = {
  a: 10,
  b: 11,
  c: 12,
};

const obj2 = {
  a: 10,
  b: 90,
  c: 34,
  // d: 100,
};

function showObj(obj) {
  console.log(obj.a, obj.b, obj.c);
}

showObj(obj1);
showObj(obj2);

// I

// Interface segregation
// Decomposition

// Interface data
const data = {
  users: [{}],
  currentUser: {},
  onlineUsers: 19,
  admins: [{}],
  onlineAdmins: 3,
  posts: [{}],
  settings: [{}],
};

// Components:

// User.List (users, onlineUsers)
// User.Profile (currentUser)
// User.OnlineUsers (onlineUsers)
// User.Settings (currentUserSettings)

// Post.List (posts)

// Admin.List (admins, onlineAdmins)
// Admin.OnlineAdmins (onlineAdmins)

const userComponents = {
  list: (users, onlineUsers) => {
    users.map((user) => {
      onlineUsers;
      document.body.innerHTML += `<div>User here</div>`;
    });
  },
};

// wrong way
// userComponents.list(data);

userComponents.list(data.users, data.onlineUsers);
// or
// { users: data.users, onlineUsers: data.onlineUsers }

// D
// Dependency inversion

// Abstraction - describes the entity
// Instance - describes the data

// Obj => main
// Obj <= obj => main

const obj = {
  a: undefined,
  b: undefined,
  c: undefined,
  d: undefined,
};

class Obj {
  constructor(data = obj) {
    this.a = data.a;
    this.b = data.b;
    this.c = data.c;
    this.d = data.d;
  }
}

const data2 = new Obj({ a: 10, b: 11, c: 12, d: 13 });

function main(data = obj) {
  console.log(data.a, data.b, data.c, data.d);
}

main(data2);
