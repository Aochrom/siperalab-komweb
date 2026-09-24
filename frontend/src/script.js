const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
    if (req.url === '/' && req.method === 'GET') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end('<h1>Home Page</h1>');
    } 
    // Fallback: If no paths match, serve the 404 page
    else {
        fs.readFile(path.join(__dirname, '404.html'), (err, data) => {
            if (err) {
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.end('Internal Server Error');
            } else {
                res.writeHead(404, { 'Content-Type': 'text/html' });
                res.end(data);
            }
        });
    }
});

server.listen(3000, () => console.log('Server running on port 3000'));
