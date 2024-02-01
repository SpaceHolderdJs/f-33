const navLinks = [...document.getElementsByClassName("nav-link")];
const cards = [...document.getElementsByClassName("landing-card")];

navLinks.forEach((link, i) => {
  link.onclick = () => {
    cards[i].scrollIntoView({ behavior: "smooth", block: "center" });
  };
});
