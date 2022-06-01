const fs = require("fs");
const path = require("path");

// fs.mkdir(path.join(__dirname,'/test'),{},err => {
//     if(err){
//         throw err;
//     }
//     console.log(`Folder Created...`);
// });

// fs.open(path.join(__dirname,'/test','hello.txt'),'w',(err)=>{
//     if(err){
//         throw err;
//     }
//     console.log(`File Created...`);
// })

//will overide files if it's exist
fs.writeFile(
  path.join(__dirname, "/test", "hello.txt"),
  "Hello World!",
  (err) => {
    if (err) {
      throw err;
    }
    console.log(`Files Written to...`);

    fs.appendFile(
      path.join(__dirname, "/test", "hello.txt"),
      " Feed me!",
      (err) => {
        if (err) {
          console.log(err);
        }
        console.log(`File Modified...`);
      }
    );

    fs.appendFile(
      path.join(__dirname, "/test", "hello.txt"),
      " I need codes!",
      (err) => {
        if (err) {
          console.log(err);
        }
        console.log(`File Modified...`);
      }
    );

    fs.readFile(
      path.join(__dirname, "/test", "hello.txt"),
      "utf8",
      (err, data) => {
        if (err) {
          console.log(err);
        }
        console.log(data);
      }
    );

    fs.rename(
      path.join(__dirname, "/test", "hello.txt"),
      path.join(__dirname, "/test", "newWorld.txt"),
      (err) => {
        if (err) {
          console.log(err);
        }

        console.log(`File renamed..`);
      }
    );
  }
);

//will create file and write to it if it doesn't exist. synchronous
// fs.appendFile(path.join(__dirname,'/test','hello.txt'),' Feed me!',(err) => {
//     if(err){
//         console.log(err);
//     }
//     console.log(`File Modified...`);

//     fs.readFile(path.join(__dirname,'/test','hello.txt'),'utf8',(err,data)=> {
//         if(err){
//             console.log(err);
//         }
//         console.log(`Data:`,data);

//     })
// });
//will come before appendFile()
// fs.readFile(path.join(__dirname,'/test','hello.txt'),'utf8',(err,data)=> {
//     if(err){
//         console.log(err);
//     }
//     console.log(data);
// });

//will alway run first
// fs.rename(
//   path.join(__dirname, "/test", "hello.txt"),
//   path.join(__dirname, "/test", "newWorld.txt"),
//   (err) => {
//     if (err) {
//       console.log(err);
//     }

//     console.log(`File renamed..2`);
//   }
// );
