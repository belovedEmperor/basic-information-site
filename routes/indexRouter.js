const { Router } = require("express");
const path = require("path");

const indexRouter = Router();

indexRouter.get("/", (request, response) => {
  response.sendFile("index.html", { root: path.join(__dirname, "../") });
});
indexRouter.get("/about", (request, response) => {
  response.sendFile("about.html", { root: path.join(__dirname, "../") });
});
indexRouter.get("/contact", (request, response) => {
  response.sendFile("contact.html", { root: path.join(__dirname, "../") });
});
indexRouter.get("/{*splat}", (request, response) => {
  response
    .status(404)
    .sendFile("404.html", { root: path.join(__dirname, "../") });
});

module.exports = indexRouter;
