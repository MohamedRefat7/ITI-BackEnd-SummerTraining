const http = require("http");
const fs = require("fs");
const port = 3000;

const server = http.createServer((req, res) => {
  switch (req.url) {
    case "/": {
      res.statusCode = 200;
      res.setHeader("Content-Type", "text/html");
      const bufferHtml = fs.readFileSync("./index.html");
      res.end(bufferHtml);
      break;
    }
    case "/view1.jpg": {
      res.statusCode = 200;
      res.setHeader("Content-Type", "image/jpg");
      const imgbuffer = fs.readFileSync("./view1.jpg");
      res.end(imgbuffer);
      break;
    }
    case "/user": {
      res.statusCode = 200;
      res.setHeader("Content-Type", "application/json");
      const josnbuffer = fs.readFileSync("user.json");
      res.end(josnbuffer);
      break;
    }
    case "/svg.png": {
      res.statusCode = 200;
      res.setHeader("Content-Type", "image/x-icon");
      const favicon = fs.readFileSync("./svg.png");
      res.end(favicon);
      break;
    }
  }
});

server.listen(port, () => {
  console.log(`👌Server running at http://localhost:${port}/👌`);
});
