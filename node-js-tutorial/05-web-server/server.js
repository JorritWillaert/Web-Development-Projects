const http = require("http");
const path = require("path");
const fs = require("fs");
const fsPromises = require("fs").promises;

const logEvents = require("./logEvents");
const EventEmitter = require("events");
class Emitter extends EventEmitter {}

// Initialize object
const myEmitter = new Emitter();

const PORT = process.env.PORT || 3500;

const server = http.createServer((req, res) => {
  console.log(req.url, req.method);

  const extension = path.extname(req.url);
  let contentType;

  switch (extension) {
    case ".css":
      contentType = "text/css";
      break;
    case ".js":
      contentType = "text/javascript";
      break;
    case ".json":
      contentType = "application/json";
      break;
    case ".jpg":
      contentType = "image/jpeg";
      break;
    case ".png":
      contentType = "image/png";
      break;
    case ".txt":
      contentType = "text/plain";
      break;
    default:
      contentType = "text/html";
  }

  // Horrible statement, but simply following the tutorial...
  let filePath = contentType === 'text/html' && req.url === '/' ? path.join(__dirname, 'views', 'index.html')
    : contentType === 'text/html' && req.url.slice(-1) === '/' ? path.join(__dirname, 'views', req.url, 'index.html')
    : contentType === 'text/html' ? path.join(__dirname, 'views', req.url)
    : path.join(__dirname, req.url);

  // Makes .html extension not required in the browser
  if (!extension && req.url.slice(-1) !== '/') {
    filePath += '.html';
  }

  const fileExists = fs.existsSync(filePath);
  
  if (fileExists) {
    // Serve the file
  } else {
    // 404
    // 301 redirect
    console.log(path.parse(filePath));
  }
});

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
