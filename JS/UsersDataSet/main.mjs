import { faker } from "https://cdn.skypack.dev/@faker-js/faker";

const usersQuantity = 100;

function generateUser() {
  const user = {
    fullname: faker.person.fullName(),
    city: faker.location.city(),
    location: faker.location.country(),
    salary: faker.number.int({ min: 500, max: 5000 }),
    technologies: faker.helpers.arrayElements([
      "js",
      "html",
      "css",
      "react",
      "angular",
    ]),
    pictureURL: faker.image.avatar(),
  };

  return user;
}

function generateUsers(quantity) {
  const users = [];

  for (let i = 0; i < quantity; i++) {
    users.push(generateUser());
  }

  return users;
}

const USERS = generateUsers(usersQuantity);

// elements
const searchInput = document.getElementById("search-input");
const searchButton = document.getElementById("search-button");

const usersWrapper = document.getElementById("users-wrapper");

let searchResults = null;

searchButton.onclick = () => {
  if (!searchResults) {
    searchButton.textContent = "Reset search";
    const value = searchInput.value.toLowerCase();

    searchResults = USERS.filter((user) =>
      user.fullname.toLowerCase().includes(value)
    );
    renderUsers(searchResults);
  } else {
    searchButton.textContent = "Search";
    searchInput.value = "";
    searchResults = null;
    renderUsers(USERS);
  }
};

function renderUsers(users) {
  usersWrapper.innerHTML = "";

  users.forEach((user, i) => {
    const { fullname, city, location, pictureURL, salary, technologies } = user;
    usersWrapper.innerHTML += `
        <div class="user-item" id="user-${i}">
            <img alt="${fullname}" src="${pictureURL}" class="user-avatar" />
            <div>
                <h3>${fullname}</h3>
                <h4>${salary} $</h4>
                <span>${location}, ${city}</span>
            </div>
            <div class="technologies">${technologies
              .map((tech) => `<img width="25" src="./assets/${tech}.svg" />`)
              .join("")}
            </div>
        </div>
    `;
    // <button class="delete-user-button" id="delete-user-${i}">Delete</button>
    // const deleteButton = document.getElementById(`delete-user-${i}`);

    setTimeout(() => {
      const deleteButton = document.createElement("button");

      console.log(deleteButton, "deleteButton");

      deleteButton.textContent = "Delete";

      deleteButton.onclick = () => {
        console.log(`Delete user:`, user);

        // HW
        const result = USERS.filter();

        renderUsers(result);
      };

      const userElement = document.getElementById(`user-${i}`);
      userElement.appendChild(deleteButton);
    }, 1000);
  });
}

renderUsers(USERS);
