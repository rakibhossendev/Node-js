const http = require("http");
const fs = require("fs");

const server = http.createServer((request,response) => {
    const readStream = fs.createReadStream(`${__dirname}/output.txt`,"utf-8");
    readStream.pipe(response)
})

server.listen(3000);
console.log("server runnig on port 3000")