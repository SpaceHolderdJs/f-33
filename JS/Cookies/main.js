// cookies
console.log(document.cookie);
console.log(typeof document.cookie);

document.cookie = "email=email@gmail.com;";
document.cookie = "name=Igor;";
document.cookie = "age=24;";
document.cookie = "id=132hg3h1g32hg13;";

console.log(document.cookie, "after");

const cookies = document.cookie.split(";");
console.log(cookies, "splittedCookies");

class Cookies {
  constructor() {
    this.cookie = document.cookie;
  }

  getCookie(key) {
    return this.getAllCookies()[key];
  }

  getAllCookies() {
    const splitedCookies = document.cookie.split(";");

    const cookies = {};

    splitedCookies.forEach((cookie) => {
      const [key, value] = cookie.trim().split("=");
      cookies[key] = value;
    });

    return cookies;
  }

  addCookie(key, value, params = { "Max-Age": undefined, expires: undefined }) {
    let newCookie = `${key}=${value};`;

    for (const param in params) {
      const possibleParam = params[param];

      if (possibleParam) {
        newCookie += `${param}=${possibleParam};`;
        console.log(possibleParam, "possibleParam");
      }
    }

    document.cookie = newCookie;
  }

  removeCookie(key) {
    document.cookie = `${key}=; Max-Age=0`;
  }
}

const cookieClass = new Cookies();
const allCookies = cookieClass.getAllCookies();
console.log(allCookies, "allCookies");

const emailFromCookie = cookieClass.getCookie("email");
console.log(emailFromCookie, "emailFromCookie");

const idFromCookie = cookieClass.getCookie("id");
console.log(idFromCookie, "idFromCookie");

const dataFromCookie = cookieClass.getCookie("data");
console.log(dataFromCookie, "dataFromCookie");

cookieClass.addCookie("password", "18432hd2eh8328");

console.log(document.cookie, "cookie");

cookieClass.removeCookie("password");

console.log(document.cookie, "final cookie");

const allCookies2 = cookieClass.getAllCookies();
console.log(allCookies2, "allCookies");

cookieClass.addCookie("password", "121409849j");
console.log(cookieClass.getAllCookies());

cookieClass.addCookie("secret-message", "hello", { "Max-Age": 10 });

console.log(document.cookie, "!!!");

const date = new Date();
date.setHours(date.getHours() + 1);
console.log(date.toString(), "date with UTC");

cookieClass.addCookie("cookie-with-expires", "0000", {
  expires: date.toString(),
});

// With library

// Cookies.set("hello-from-library", "value");
// const cookie = Cookies.get("hello-from-library");

// console.log(cookie, "!!!");

// Cookies.remove("hello-from-library");

// console.log(Cookies.get("hello-from-library"));

// Usage of cookies (common)

// 1. JWT authorization
// https://jwt.io/introduction
// site <- cookie -> server
cookieClass.addCookie("access_token", "Jhdquei1u2182188wu812812718");
cookieClass.addCookie("refresh_token", "Jwsjaksjakjskasjakjsaksjkasja11");

// 2. Additional data (limit=100, email=email@gmail.com)

// 3. Marking
const requestHashedData = cookieClass.getCookie("data");

if (requestHashedData) {
  console.log("Invalid request");
}

document.cookie = "email=email@gmail.com;";
fetch("https://jsonplaceholder.typicode.com/todos", {
  method: "POST",
  body: JSON.stringify({ date: new Date() }),
})
  .then((data) => {
    console.log(data.headers, "headers");
    const email = cookieClass.getCookie("email");
    const ga = cookieClass.getCookie("_ga");
    console.log(ga, "GA");
  })
  .catch(() => {});
