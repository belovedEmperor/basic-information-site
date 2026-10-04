const fs = require("node:fs");

const express = require("express");
const app = express();

function getHtml(path, response) {
  fs.readFile(path, (error, data) => {
    if (error) {
      console.error(error);
      return;
    }
    response.end(data);
  });
}

app.get("/", (request, response) => {
  response.sendFile("index.html", { root: __dirname });
});
app.get("/about", (request, response) => {
  response.sendFile("about.html", { root: __dirname });
});
app.get("/contact", (request, response) => {
  response.sendFile("contact.html", { root: __dirname });
});
app.use((request, response) => {
  response.status(404).sendFile("404.html", { root: __dirname });
});

app.listen(process.env.PORT || 8080, (error) => {
  if (error) {
    throw error;
  }

  console.log(`Server running at ${process.env.PORT || 8080}`);
});
