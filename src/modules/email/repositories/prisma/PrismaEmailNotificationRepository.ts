import { IEmailNotificationRespository } from '../IEmailNotificationRespository'
import { prisma } from '@shared/libs/prisma'
import { Prisma } from '@prisma/client'

export class PrismaEmailNotificationRespository
  implements IEmailNotificationRespository
{
  async create(data: Prisma.EmailNotificationUncheckedCreateInput) {
    const emailNotification = await prisma.emailNotification.create({
      data,
    })

    return emailNotification
  }
}
