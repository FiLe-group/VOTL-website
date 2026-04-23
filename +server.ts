import type { Server } from "vike/types";
import { app } from "./server/hono";

const port = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000;

// https://vike.dev/server
export default {
  fetch: app.fetch,
  prod: {
    port,
    onReady(server) {
      console.log('Server is ready.')
    },
    onCreate(server) {
      console.log('Server created.')
    },
  },
} satisfies Server;
