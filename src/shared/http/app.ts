import fastify from 'fastify'
import { routes } from './routes'
import { FastifyAdapter } from '@bull-board/fastify'
import { BullMQAdapter } from '@bull-board/api/bullMQAdapter'
import { createBullBoard } from '@bull-board/api'
import { emailQueue } from '@modules/email/queues/emailQueue'

export const app = fastify()

const serverAdapter = new FastifyAdapter()

createBullBoard({
  queues: [new BullMQAdapter(emailQueue)],
  serverAdapter,
})

serverAdapter.setBasePath('/admin/queues')
app.register(serverAdapter.registerPlugin(), {
  prefix: '/admin/queues',
  basePath: '/admin/queues',
})

app.register(routes)
