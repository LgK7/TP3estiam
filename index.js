const http = require(http'):

const server = http.createServer(req, res) => 1

res.statusCode = 200;

res setHeader ('Content-Type', 'text/plain*):

res. end ('Hello World\n*);

7):

const port = process.env.PORT || 3000;

server.listen (port, 0=>*

console.log( Server running at http://localhost:S(port)/);

);
