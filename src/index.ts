import http from 'http';

const server = http.createServer((_, res) => {
  res.writeHead(200);
  res.end('Hello people!');
});

server.listen(5678);
