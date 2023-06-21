import { FastifyInstance } from 'fastify'
import { emailRoutes } from '../../../modules/email/http/routes'

export const routes = async (app: FastifyInstance) => {
  app.register(emailRoutes)
}
