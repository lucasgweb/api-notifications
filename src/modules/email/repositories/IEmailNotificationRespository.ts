import { EmailNotification, Prisma } from '@prisma/client'

export interface IEmailNotificationRespository {
  create(
    data: Prisma.EmailNotificationCreateInput,
  ): Promise<EmailNotification | null>
}
