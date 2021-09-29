const cluster = require("cluster");

console.log(cluster.isMaster); //worker instances will have this field false

//if file is executed in master mode cluster.fork() will be execute again but in child mode and worker instances will start

if (cluster.isMaster) {
  cluster.fork();
  cluster.fork();
  cluster.fork();
} else {
  //worker instances
  const express = require("express");
  const app = express();

  function hold(duration) {
    const start = Date.now();
    while (Date.now() - start < duration) {}
  }

  //first route performing a task for 5 second
  app.get("/", (req, res) => {
    hold(5000);
    res.send("Hello");
  });

  //second route to test

  //test using apache benchmark
  //command --> ab -c 50 -n 500 localhost:3000/fast
  app.get("/test", (req, res) => {
    res.send("test");
  });

  app.listen(3000, () => console.log("Server started..."));
}
