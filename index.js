// const person = require('./person');
// console.log(person);
// console.log('Hello World from Node!');

// const Person = require('./person');
// const person1 = new Person('tron',28);
// console.log(person1.name);

// const Logger = require("./logger");
// const fs = require("fs");
// const path = require("path");

// const logger = new Logger();

// fs.writeFile(path.join(__dirname, "log.txt"), "", {}, (err) => {
//   if (err) {
//     throw err;
//   }
// });
// logger.on("message", (data) => {
//   console.log(`Called Listener:`, data);
//   fs.appendFile(path.join(__dirname,'/log',"log.txt"), JSON.stringify(data), (err) => {
//     if (err) {
//       throw err;
//     }
//   });
// });

// logger.log("First one!");
// logger.log('another gone')

const path = require("path");
const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  //return the requested folder || page
  // console.log(req.url);
  // if (req.url === "/") {
  //   fs.readFile(
  //     path.join(__dirname, "/public", "index.html"),
  //     (err, content) => {
  //       if (err) {
  //         throw err;
  //       }
  //       res.writeHead(200, { "Content-type": "text/html" });
  //       res.end(content);
  //     }
  //   );

  //   // res.writeHead(200,{'Content-type':'text/html'});
  //   // res.end(`<h1>Home</h1>`);
  // }else if(req.url === "/about"){
  //   fs.readFile(
  //     path.join(__dirname, "/public", "about.html"),
  //     (err, content) => {
  //       if (err) {
  //         throw err;
  //       }
  //       res.writeHead(200, { "Content-type": "text/html" });
  //       res.end(content);
  //     }
  //   );
  // }else if(req.url === "/api/users"){
  //   const users = [
  //     {name:'Tron',age:28},
  //     {name:'Win',age:27}
  //   ];

  //   res.writeHead(200,{"Content-type":"application/json"});
  //   res.end(JSON.stringify(users));
  // }

  //Build file path
  let filePath = path.join(
    __dirname,
    "public",
    req.url === "/" ? "index.html" : req.url
  );
  console.log(filePath);

  //Get file extension
  let extName = path.extname(filePath);
  //Initial content type
  let contentType = "text/html";

  //Check ext and set content type
  switch (extName) {
    case ".js":
      contentType = "text/javascript";
      break;
    case ".css":
      contentType = "text/css";
      break;
    case ".json":
      contentType = "application/json";
      break;
    case ".png":
      contentType = "image/png";
      break;
    case ".jpg":
      contentType = "image/jpg";
      break;
  }

  //Check if contentType is text/html but no .html file extension
  if (contentType === "text/html" && extName === "") {
    filePath += ".html";
  }

  //Read file
  fs.readFile(filePath, (err, content) => {
    if (err) {
      console.log(err);
      if (err.code === "ENOENT") {
        //page not found
        fs.readFile(
          path.join(__dirname, "public", "error.html"),
          (err, content) => {
            if (err) {
              throw err;
            }
            res.writeHead(404, { "Content-type": "text/html" });
            res.end(content, "utf8");
          }
        );
      } else {
        //Server errors
        res.writeHead(500);
        res.end(`Server error: ${err.code}`);
      }
    } else {
      //Success
      res.writeHead(200, { "Content-type": contentType });
      res.end(content, "utf8");
    }
  });
});

const PORT = process.env.PORT || 5500;

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
