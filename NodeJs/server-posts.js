const fs = require("fs");

async function generatePostsPages() {
  const data = await fetch("https://jsonplaceholder.typicode.com/posts");
  const response = await data.json();

  response.forEach((post) => {
    const { userId, id, title, body } = post;

    const fileName = `frontend/posts/${title}.html`;

    const content = `
      <head>
        <link rel="stylesheet" href="../post-page.css" />
      </head>
      <body>
        <div class="post-wrapper">
          <h3>${title}</h3>
          <article>${body}</article>
        </div>
      </body>
    `;

    fs.appendFile(fileName, content, (err) => err && console.log(err));
  });
}

generatePostsPages();
