import http from 'http';

const PORT = process.env.PORT ?? 5678;

const server = http.createServer((_, res) => {
  res.writeHead(200);
  res.end('Hello world!');
});

server.listen(PORT);
