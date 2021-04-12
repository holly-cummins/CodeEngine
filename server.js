const http = require("http");

const duck = require("./duck");

http
  .createServer(function (request, response) {
    target = process.env.TARGET ? process.env.TARGET : "World";
    msg = process.env.MSG ? process.env.MSG : "Hello " + target + "\n";
    response.writeHead(200, { "Content-Type": "text/plain" });
    response.end(duck + msg);
  })
  .listen(8080);

console.log("Server running at http://0.0.0.0:8080/");
