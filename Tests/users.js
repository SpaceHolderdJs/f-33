const getUsers = () => {
  return [{ name: "Igor", age: 24 }];
};

const addUser = (user) => {
  return getUsers().concat(user);
};

module.exports = { getUsers, addUser };
