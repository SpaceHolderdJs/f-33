document;
// DOM

const scripts = document.scripts;
console.log(scripts);

const links = document.links;
console.log(links);

const forms = document.forms;
console.log(forms);

const images = document.images;
console.log(images);

console.log(document.location);

const reloadButton = document.getElementById("reload");

reloadButton.onclick = () => {
  document.location.reload();
};

console.log(document.fullscreenEnabled);
document.onfullscreenchange = () => {
  console.log("change");
};

// selectors (base)
// HTML Collection
const p = document.getElementById("id");
const paragraphs = document.getElementsByClassName("paragraph");
const paragraphs2 = document.getElementsByTagName("");
const paragraphs3 = document.getElementsByName("name");

console.log(paragraphs2, "paragraph2");
console.log(paragraphs3, "paragraph3");

// NodeList
const paragraphs4 = document.querySelector("#id");
const paragraphs5 = document.querySelectorAll("p");

const inputs = [...document.querySelectorAll("input")];

// !!!
paragraphs5.forEach((p) => {
  console.log(p, "!!!");
});

NodeList;

console.log(paragraphs4, paragraphs5);

// console.log(paragraphs, "!!!");
// console.log({}, "!!!");
// console.log(paragraphs.item(4));
// console.log(paragraphs.namedItem("name"));
// console.log(paragraphs.length, "length");

// for (const element of paragraphs) {
//   console.log("element", element);
// }

// Iterable

// paragraphs.forEach((paragraph) => {
//   console.log(paragraph);
// });

HTMLCollection;
Array;
