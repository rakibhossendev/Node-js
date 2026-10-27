// dependencies
const http = require("http");
const url = require("url");

// app object - module scaffolding
const app = {};

// configuration
app.config={
    port: 3000,
}

// create server
app.createServer = () => {
    const server = http.createServer(app.handleRequestResponse)
    server.listen(app.config.port,()=> {
        console.log(`Server start on port ${app.config.port}`)
    });

}
// Handle server
app.handleRequestResponse = (request,response) => {
    // request handling

    // get the url and parse it
    const parsedUrl = url.parse(request.url,true);
    const path = parsedUrl.pathname;
    const trimmedPath = path.replace(/^\/+|\/+$/g, '');
    const method = request.method.toLowerCase();
    const queryStringObject = parsedUrl.query;
    const headerObject = request.headers;
    const body = request.body;

    console.log(body)
    // response handling
    response.end("Hello World")
}

app.createServer();