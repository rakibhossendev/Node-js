const fs = require("fs");

// fs.writeFileSync("file.txt","Hello, I am currently learning Node.js");
// fs.appendFileSync("file.txt","\nDo you know? what is Node.js?");


fs.readFile("file.txt",(error,data) => {
    if(!error){
        console.log(data.toString());
    }
});
