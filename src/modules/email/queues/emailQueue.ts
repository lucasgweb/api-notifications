import { env } from '@shared/env'
import { EmailService } from '../services/EmailService'
import { CreateEmailNotificationUseCase } from '../useCases/CreateEmailNotification'
import { PrismaEmailNotificationRespository } from '../repositories/prisma/PrismaEmailNotificationRepository'
import { Queue, Worker } from 'bullmq'

export const emailQueue = new Queue('emailQueue', {
  connection: {
    host: env.REDIS_HOST,
    port: env.REDIS_PORT,
  },
})

export const emailWorker = new Worker('emailQueue', async (job) => {
  const { sender, subject, content, recipient } = job.data

  const emailNotificationRepository = new PrismaEmailNotificationRespository()
  const createEmailNotificationUseCase = new CreateEmailNotificationUseCase(
    emailNotificationRepository,
  )

  const emailService = new EmailService()

  try {
    await emailService.execute({ sender, to: recipient, subject, content })

    const { emailNotification } = await createEmailNotificationUseCase.execute({
      content,
      recipient,
      sender,
      status: 'DELIVERED',
      subject,
      sendAt: new Date(),
    })
    return emailNotification
  } catch (error) {
    throw new Error(`Error processing email job: ${error}`)
  }
})
