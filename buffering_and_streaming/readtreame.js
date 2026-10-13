const http = require("http");

const server = http.createServer((request,response) => {
    if(request.url === "/"){
        response.write('<html><head><title>form</title></head>');
        response.write('<body><form action="/process"  method="post"><input type="text" name="username"></input><button type="submit">Submit</button></form<body></html>')
        response.end()
    }else if(request.url === "/process" && request.method==="POST"){
        const body = []
        request.on('data',(partOfData) => {
            body.push(partOfData)
        })

        request.on('end',()=> {
            console.log("Stream finished successfully");
            const parseBody = Buffer.concat(body).toString();
            console.log(parseBody)
        })
        response.write("Thanks for submting")
        response.end()
    }else{
        response.write("404 Not Found")
        response.end()
    }

})

server.listen(3000);
console.log("server is running on port 3000......")