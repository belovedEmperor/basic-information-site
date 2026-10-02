const http = require("node:http");
const fs = require("node:fs");

const server = http.createServer();

function getHtml(path, response) {
  fs.readFile(path, (error, data) => {
    if (error) {
      console.error(error);
      return;
    }
    response.end(data);
  });
}

server.on("request", (request, response) => {
  response.writeHead(200, { "Content-Type": "text/html" });
  switch (
    new URL(`http://${process.env.HOST ?? "localhost"}${request.url}`).pathname
  ) {
    case "/":
      getHtml("./index.html", response);
      break;
    case "/about":
      getHtml("./about.html", response);
      break;
    case "/contact":
      getHtml("./contact.html", response);
      break;
    default:
      getHtml("./404.html", response);
      break;
  }
});

server.listen(8080);
