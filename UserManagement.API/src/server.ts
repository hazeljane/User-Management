import http from "http";
import express from "express";

import "./config/logging"; // Fixed relative path syntax
import { server } from "./config/config";

import "reflect-metadata";

import { corsHandler } from "./middleware/corsHandler"; // Fixed the spelling of "middleware"
import { loggingHandler } from "./middleware/loggingHandler";
import { routeNotFound } from "./middleware/routeNotFound";

export const application = express();
export let httpServer: ReturnType<typeof http.createServer>; // Fixed `typeofhttp` spacing issue

export const Main = async () => {
  logging.log("--------------------------------");
  logging.log("Initializing API");
  logging.log("--------------------------------");

  // Apply middleware
  application.use(loggingHandler);
  logging.log("--------------------------------");
  logging.log("Define Controller Routing");
  logging.log("--------------------------------");

  // Add route handlers here (e.g., application.use("/api", apiRouter))

  // Catch-all for unmatched routes
  application.use(routeNotFound);
  logging.log("--------------------------------");

  // Create HTTP server
  httpServer = http.createServer(application);

  // Start server
  httpServer.listen(server.SERVER_PORT, () => {
    logging.log(
      `Server started on ${server.SERVER_HOSTNAME}:${server.SERVER_PORT}`
    );
    logging.log("--------------------------------");
  });
};

export const Shutdown = (callback: () => void) =>
  httpServer && httpServer.close(callback);

Main();
