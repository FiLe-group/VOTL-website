import { Hono } from 'hono'
import vike from '@vikejs/hono'
import type { Server } from 'vike/types'

const port = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000;

const app = new Hono()
vike(app) // Attaches Vike

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
} satisfies Server
