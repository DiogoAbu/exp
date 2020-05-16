import http from 'http';

const server = http.createServer((_, res) => {
  res.writeHead(200);
  res.end('Hello world!');
});

server.listen(5678);
