import { env } from '../env'
import { app } from './app'

app
  .listen({
    port: env.PORT,
  })
  .then(() => {
    console.log('Bull Board: http://localhost:3333/admin/queues/')
    console.log('🚀 Server is Running.')
  })
