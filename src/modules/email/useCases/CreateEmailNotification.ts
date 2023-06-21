import { IEmailNotificationRespository } from '../repositories/IEmailNotificationRespository'
import { ICreateEmailNotificationDTO } from '../dto/ICreateEmailNotificationDTO'

export class CreateEmailNotificationUseCase {
  constructor(
    private emailNotificationRepository: IEmailNotificationRespository,
  ) {}

  async execute({
    sender,
    content,
    recipient,
    status,
    subject,
  }: ICreateEmailNotificationDTO) {
    const emailNotification = await this.emailNotificationRepository.create({
      content,
      recipient,
      sender,
      status,
      subject,
    })

    return {
      emailNotification,
    }
  }
}
