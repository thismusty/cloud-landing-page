const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({
    message: "Hello from Mustapha Yusuf's Node.js app!",
    time: new Date().toISOString()
  }));
});

server.listen(3000, () => {
  console.log('Node.js server running on http://localhost:3000');
});
