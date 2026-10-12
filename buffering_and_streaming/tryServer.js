const http = require("http");

const server = http.createServer((request,response) => {
    if(request.url === "/"){
        response.write("Hello Home page");
        response.end()
    }else if(request.url === "/about"){
        response.write("About page")
        response.end()
    }else{
        response.write("404 Not Found")
        response.end()
    }
})

server.listen(3000);
console.log("server is running on port 3000......")