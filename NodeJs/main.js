const os = require("os");
const fs = require("fs");

// creating files
// fs.appendFile("text-file.txt", "Hello, Node.js", (err) => {
//   if (err) console.log(err);

//   console.log("File was created!");
// });

// console.log(os.platform(), "platform");
// console.log(os.homedir(), "dir");
// console.log(os.machine(), "computer");
// console.log(os.userInfo(), "userInfo");

// document -
// window -

// console.log("Hello, NodeJS");

// function main(a, b, c) {
//   return a + b + c;
// }

// const sum = main(10, 20, 30);
// console.log(sum);

// fetch("https://jsonplaceholder.typicode.com/todos/1")
//   .then((response) => response.json())
//   .then((json) => {
//     const stringifiedJson = JSON.stringify(json);

//     fs.appendFile("response.json", stringifiedJson, (err) => {
//       if (err) console.log(err, "err");
//     });
//   });

// Завдання: https://jsonplaceholder.typicode.com/users
// Зробити запит на посилання
// Для кожного користувача створити свій текстовий файл (txt)
// Де назвою буде name користувача
// У кожному файлі має бути email відповідного користувача

// fetch("https://jsonplaceholder.typicode.com/users")
//   .then((res) => res.json())
//   .then((res) => {
//     res.slice(0, 3).forEach((user) => {
//       const userInJson = JSON.stringify(user);
//       console.log(user);

//       fs.appendFile(
//         `${user.name}.json`,
//         userInJson,
//         (err) => err && console.log(err)
//       );
//     });
//   });

// let n = 0;

// setInterval(() => {
//   n += 5;
//   console.log(`Now couter is: ${n}`);
// }, 5000);

fs.mkdir("files", (err) => {
  console.log(err);
});

fs.appendFile("files/test.txt", "Test", (err) => console.log(err));

fs.unlink("files/test.txt", (err) => {
  console.log(err);
});
