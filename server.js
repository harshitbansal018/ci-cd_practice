const http = require("node:http");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Hello Harshit! CI/CD practice app.");
});

server.listen(3000, () => {
  console.log("App running at http://localhost:3000");
});