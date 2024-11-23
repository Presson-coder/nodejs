import http from "http";
const PORT = process.env.PORT;

const server = http.createServer((req, res) => {
  if(req.url === '/'){
  res.writeHead(200, {
    "Content-Type": "application/json",
  });
  res.end(JSON.stringify({ message: "home page" }));
  } else if(req.url === '/about') {
    res.writeHead(200, {
        "Content-Type": "application/json",
    });
    res.end(JSON.stringify({ message : "about page"}));
  } else {
    res.writeHead(404, {
        "Content-Type": "application/json",
    });
    res.end(JSON.stringify({ message: "not found"}));
  }
});

server.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
