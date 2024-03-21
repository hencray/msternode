const http = require('http');

const server = http.createServer(function(req, res) {
    console.log(req)
})
// function rqListener(req, res) {

// }

server.listen(3001);
