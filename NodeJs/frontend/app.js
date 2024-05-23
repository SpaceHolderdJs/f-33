class App {
  static usersLinksContainer = document.querySelector("#users-links");
  static postsLinksContainer = document.querySelector("#posts-links");

  constructor() {}

  async getUsers() {
    const data = await fetch("https://jsonplaceholder.typicode.com/users");
    const response = await data.json();

    return response;
  }

  async getPosts() {
    const data = await fetch("https://jsonplaceholder.typicode.com/posts");
    const response = await data.json();

    return response;
  }

  generateUsersLinks(users) {
    for (const user of users) {
      const a = document.createElement("a");
      a.href = `users/${user.name.replace(" ", "-")}.html`;
      a.textContent = user.name;

      App.usersLinksContainer.appendChild(a);
    }
  }

  generatePostsCards(posts) {
    for (const post of posts) {
      const card = document.createElement("div");
      card.classList.add("post-card");

      const title = document.createElement("h3");
      title.textContent = post.title;
      card.appendChild(title);

      const link = document.createElement("a");
      link.textContent = "Visit the page";
      link.href = `posts/${post.title}.html`;
      card.appendChild(link);

      App.postsLinksContainer.appendChild(card);
    }
  }
}

const applicaton = new App();

applicaton.getUsers().then((users) => applicaton.generateUsersLinks(users));
applicaton.getPosts().then((posts) => applicaton.generatePostsCards(posts));
