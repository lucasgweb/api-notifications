import { emailQueue } from '@modules/email/queues/emailQueue'
import { successResponse } from '@shared/utils/response'
import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'

export const sendEmailController = async (
  request: FastifyRequest,
  reply: FastifyReply,
) => {
  const sendEmailBodyRequestSchema = z.object({
    recipient: z.string(),
    sender: z.string(),
    content: z.string(),
    subject: z.string(),
  })

  const { content, recipient, sender, subject } =
    sendEmailBodyRequestSchema.parse(request.body)

  const emailNotification = await emailQueue.add(
    'emailQueue',
    {
      content,
      recipient,
      sender,
      subject,
    },
    {
      delay: 5000,
    },
  )

  reply.send(successResponse(emailNotification))
}
