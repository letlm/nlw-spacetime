import fastify from 'fastify'
import cors from '@fastify/cors'
import { memoriesRoutes } from './routes/memories'

const app = fastify()
app.register(cors, {
  origin: true, // ['http://localhost:3000, 'https:algumacoisa]
})
app.register(memoriesRoutes)

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log('listening on port 3333')
  })
