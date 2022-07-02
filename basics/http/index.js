const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write("Hello  world");
    res.end();
  }

  if (req.url === "/api/courses") {
    res.write(
      JSON.stringify([
        { id: 1, name: "CS" },
        { id: 2, name: "History" },
      ])
    );
    res.end();
  }
});

//socket events
//server.on("connection", (socket) => console.log("connection.."));

server.listen(3000);
