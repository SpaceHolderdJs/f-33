const obj = {};
Object;

const user = { name: "Igor", age: 24, key: true };
console.log(user.name);
console.log(user.age);
console.log(user["age"]);
console.log(user);

// Створіть свій object з ключами що відповідають вашим данним

// Напишіть функцію що примає текст (prompt)
// від користувача та повертає відповідні данні
// sol() => { length: 10, bigLetters: 3, smallLetters: 20 }
// str.toUpperCase() str.toLowerCase()

const sol = () => {
  const str = prompt("Enter the text");

  let bigLetters = 0;
  let smallLetters = 0;

  for (const char of str) {
    // logic
  }

  return {
    length: "",
    bigLetters: 0,
    smallLetters: 0,
  };
};
