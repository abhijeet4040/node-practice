const http = require('node:http');

const server = http.createServer((req, res) => {

    const name = {
        firstName: 'John',
        lastName: 'Doe',
    }
    res.writeHead(200, {"Content-Type": "application/json"});
    res.end(JSON.stringify(name));
})

server.listen( 3000, () => {
    console.log("server running on port 3000")
})
