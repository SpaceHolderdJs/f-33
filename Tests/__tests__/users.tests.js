const faker = require("faker");
const users = require("../users");

// test("adds 1 + 2 to equal 3", () => {
//   expect(1 + 2).toBe(3);
// });

test("Check getUsers return value to be 1 user array", () => {
  const existingUsers = users.getUsers();
  expect(existingUsers.length).toBe(1);
}, 1000);

test("Check that first user of the users has age 24", () => {
  const existingUsers = users.getUsers();
  expect(existingUsers.at(0).age).toBeGreaterThanOrEqual(24);
});

test("Check adding new user", () => {
  const newUser = {
    name: "Igor2",
    age: Math.floor(Math.random() * 100),
  };

  const newUsers = users.addUser(newUser);

  console.log(newUsers, "newUsers");

  expect(newUsers.at(-1).name).toBe(newUser.name);
});
