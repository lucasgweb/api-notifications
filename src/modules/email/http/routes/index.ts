import { FastifyInstance } from 'fastify'
import { sendEmailController } from '../controllers/sendEmailController'

export const emailRoutes = async (app: FastifyInstance) => {
  app.post('/', sendEmailController)
}
