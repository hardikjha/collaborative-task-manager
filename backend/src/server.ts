import http from "http";
import app from "./app";
import { initSocket } from "./sockets";
import { env } from "./utils/env";

export const startServer = () => {
  const server = http.createServer(app);

  // Initialize socket.io
  initSocket(server);

  server.listen(env.PORT, () => {
    console.log(`🚀 Server running on port ${env.PORT}`);
  });
};
