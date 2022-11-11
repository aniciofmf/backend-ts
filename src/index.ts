import http from "node:http";
import cluster from "node:cluster";
import os from "node:os";
import config from "@/config";
import Logger from "./logger";

const port = parseInt(config.port) || parseInt("3000");
const hostname = config.endpoint || "localhost";

const app = require("./app")();
const numCPUs = os.cpus().length / 4;
const server = http.createServer(app);

function runServer() {
  server.listen(port, hostname, () => {
    const addr = server.address();
    const bind =
      typeof addr === "string" ? `pipe ${addr}` : `port ${addr.port}`;
    Logger.info(`Listening on ${bind}`);
  });
}

if (process.env.NODE_ENV !== "development") {
  if (cluster.isPrimary) {
    console.log(`Master ${process.pid} is running`);
    for (let i = 0; i < numCPUs; i += 1) {
      cluster.fork();
    }
    cluster.on("exit", (worker) => {
      Logger.info(`Worker ${worker.process.pid} just died`);
      cluster.fork();
    });
  } else {
    runServer();
  }
} else {
  runServer();
}

server.on("error", (error) => {
  if (error.syscall !== "listen") {
    throw error;
  }

  const bind = typeof port === "string" ? `Pipe ${port}` : `Port ${port}`;

  switch (error.code) {
    case "EACCES":
      Logger.error(`${bind} requires elevated privileges`);
      process.exit(1);
    case "EADDRINUSE":
      Logger.error(`${bind} is already in use`);
      process.exit(1);
    default:
      Logger.error(error);
      process.exit(1);
  }
});
