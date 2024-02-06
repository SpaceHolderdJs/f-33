// const navLinks = [...document.getElementsByClassName("nav-link")];
// const cards = [...document.getElementsByClassName("landing-card")];

// navLinks.forEach((link, i) => {
//   link.onclick = () => {
//     cards[i].scrollIntoView({ behavior: "smooth", block: "center" });
//   };
// });

// const accountLink = document.getElementById("account-link");
// const footer = document.getElementById("footer");

// accountLink.onclick = (e) => {
//   e.preventDefault();
//   footer.scrollIntoView({ behavior: "smooth", block: "center" });
// };

// const [accountLinkByClass] = [
//   ...document.getElementsByClassName("account-link"),
// ];

// const [footerByClassName] = Array.from(
//   document.getElementsByClassName("footer")
// );

// console.log(accountLinkByClass, footerByClassName);

// accountLinkByClass.onclick = () => {
//   footerByClassName.scrollIntoView({ behavior: "smooth" });
// };

// e.preventDefault();

const navLinks = [...document.getElementsByClassName("nav-link")];
const cards = [...document.getElementsByClassName("landing-card")];
const accountLink = document.querySelector(".account-link");
const footer = document.querySelector("footer");

navLinks.forEach((link, i) => {
  link.onclick = (event) => {
    console.log(event, "event");
    // event.preventDefault();
    cards[i].scrollIntoView({ behavior: "smooth", block: "center" });
  };
});

accountLink.onclick = (event) => {
  //   event.preventDefault();
  footer.scrollIntoView({ behavior: "smooth", block: "start" });
};
